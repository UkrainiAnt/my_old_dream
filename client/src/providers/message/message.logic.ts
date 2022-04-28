import { useEffect, useState } from "react";
import { IUser, IMessage, CreateMessagePayload } from "models";
import { useChatContext } from "hooks/context";

import { Socket, io } from "socket.io-client";
import { config } from "config";

let socket: Socket;

const MessageLogic = () => {
  const { selectedChat } = useChatContext();

  const [typingPerson, setTypingPerson] = useState<IUser | null>(null);
  const [messages, setMessages] = useState<IMessage<string>[]>([]);

  const [isMessagesLoading, setMessagesLoading] = useState<boolean>(false);

  const connectSocket = () => {
    try {
      socket = io(config.API_URL);

      socket.on("findAllMessages", (messages: IMessage<string>[]) => {
        setMessages(messages);
        console.log("got messages");
      });

      socket.on("createMessage", (newMessage: IMessage<string>) => {
        setMessages((prev) => [newMessage, ...prev]);
      });

      socket.on("updateMessage", (updatedMessage: IMessage<string>) => {
        setMessages((prev) =>
          prev.map((item) => {
            if (item.id === updatedMessage.id) {
              return updatedMessage;
            }

            return item;
          })
        );
      });

      socket.on("removeMessage", (removedMessage: IMessage<string>) => {
        setMessages((prev) =>
          prev.filter((item) => item.id !== removedMessage.id)
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket?.emit("findAllMessages");
  }, [selectedChat?.id]);

  const createMessage = (payload: CreateMessagePayload<string>) => {
    socket.emit("createMessage", { data: payload });
  };

  return { typingPerson, messages, connectSocket, createMessage };
};

export default MessageLogic;
