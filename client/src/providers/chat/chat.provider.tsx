import { ChatContext, ChatContextProps } from "./context";
import { useState, FC } from "react";
import { IChat } from "models";
import { useUserChats } from "hooks/queries";

const ChatProvider: FC = (props) => {
  const { children } = props;

  const [currentChat, setCurrentChat] = useState<null | IChat>(null);

  const { chats, isLoading, isError } = useUserChats();

  const contextValue: ChatContextProps = {
    selectedChat: currentChat,
    selectChat: setCurrentChat,
    chats: chats || [],
    isChatsLoading: isLoading,
    isChatsError: isError,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
