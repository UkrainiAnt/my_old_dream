import {
  MessageContext,
  MessageContextProps,
} from "providers/message/message.context";
import { useContext } from "react";

const useMessagesContext = () => {
  return useContext<MessageContextProps>(MessageContext);
};

export default useMessagesContext;
