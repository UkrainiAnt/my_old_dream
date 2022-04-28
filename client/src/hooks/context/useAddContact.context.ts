import { useContext } from "react";
import {
  AddContactContext,
  ContextProps,
} from "providers/addContactProvider/addContact.context";

const useAddContactContext = () => {
  return useContext<ContextProps>(AddContactContext);
};

export default useAddContactContext;
