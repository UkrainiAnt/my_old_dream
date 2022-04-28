import { createContext, Dispatch, SetStateAction } from "react";
import { IMessage } from "models";

import { IUser } from "models";
import { CreateMessagePayload } from "models";

export interface MessageContextProps {
  messages: IMessage<string>[];
  isTyping: boolean;
  typingPerson: null | IUser;

  createMessage: (payload: CreateMessagePayload<string>) => void;
}

export const MessageContext = createContext<MessageContextProps>({
  messages: [],
  isTyping: false,
  typingPerson: null,

  createMessage: () => {},
});
