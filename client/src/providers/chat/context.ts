import { createContext, Dispatch, SetStateAction } from "react";
import { IChat } from "models";

export interface ChatContextProps {
  selectedChat: IChat | null;
  selectChat: Dispatch<SetStateAction<IChat | null>>;
  isChatsLoading: boolean;
  isChatsError: boolean;
  chats: IChat[];
}

export const ChatContext = createContext<ChatContextProps>({
  selectChat: () => {},
  selectedChat: null,
  isChatsLoading: true,
  isChatsError: false,
  chats: [],
});
