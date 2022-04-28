import { StyleSheet, View } from "react-native";
import { AddContactForm, AddContactHeader } from ".";

import {
  AddContactContext,
  ContextProps,
} from "providers/addContactProvider/addContact.context";
import { useState } from "react";
import { IUser } from "models";

import { SearchUsers } from "./searchList";
import { ChatSolution } from "solution";
import { useAuthState } from "hooks/helpers";
import { useRouting } from "hooks/helpers";

const AddContactContent = () => {
  const [currentContact, setCurrentContact] = useState<IUser | null>(null);
  const [query, setQuery] = useState<string>("");

  const { navigateTo } = useRouting();
  const { user } = useAuthState();

  const createNewChat = async () => {
    const newChat = await ChatSolution.createChat({
      isGroup: false,
      users: [currentContact!.id, user!.id],
    });

    navigateTo("chat", { chatId: newChat.id });
  };

  const contextValue: ContextProps = {
    currentContact,
    onCreate: createNewChat,
    setContact: setCurrentContact,
    query,
    setSearch: setQuery,
  };

  return (
    <AddContactContext.Provider value={contextValue}>
      <View style={{ flex: 1 }}>
        <AddContactHeader />

        <View style={styles.wrapper}>
          {currentContact && !query ? <AddContactForm /> : <SearchUsers />}
        </View>
      </View>
    </AddContactContext.Provider>
  );
};

export default AddContactContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
