import { useContext } from "react";
import { ChatContext, ChatContextProps } from "providers/chat/context";

const useChatContext = () => {
  return useContext<ChatContextProps>(ChatContext);
};

export default useChatContext;
