import { StyleSheet, View } from "react-native";
import React from "react";

import { Contact } from "components/shared/molecules";
import { FlatList } from "react-native";

import { NoContactsPlaceholder } from "components/placeholders";
import { useChatContext } from "hooks/context";
import { UserLoader } from "components/shared/loaders";
import { Title } from "react-native-paper";

const Chats = () => {
  const { chats, isChatsLoading, isChatsError } = useChatContext();

  if (isChatsLoading) {
    return (
      <View style={styles.centeredWrapper}>
        <UserLoader />
      </View>
    );
  }

  if (isChatsError) {
    return (
      <View style={styles.centeredWrapper}>
        <Title>Error occurred</Title>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      {!chats.length && <NoContactsPlaceholder />}

      {!!chats.length && (
        <FlatList
          data={chats}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Contact contact={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  centeredWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
