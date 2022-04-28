import { IUser } from "models";
import { createContext, Dispatch, SetStateAction } from "react";

export interface ContextProps {
  onCreate: () => void;
  currentContact: IUser | null;
  setContact: Dispatch<SetStateAction<IUser | null>>;
  setSearch: Dispatch<SetStateAction<string>>;
  query: string;
}

export const AddContactContext = createContext<ContextProps>({
  currentContact: null,
  onCreate: () => {},
  setContact: () => {},

  setSearch: () => {},
  query: "",
});
