import { StyleSheet } from "react-native";

import { useEffect, FC } from "react";
import { MessageContext, MessageContextProps } from "./message.context";

import { useMessageLogic } from ".";

const MessageProvider: FC = (props) => {
  const { children } = props;

  const { messages, typingPerson, connectSocket, createMessage } =
    useMessageLogic();

  const contextValue: MessageContextProps = {
    isTyping: !!typingPerson,
    messages,
    typingPerson,
    createMessage,
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;

const styles = StyleSheet.create({});
