import { StyleSheet, View } from "react-native";
import { ChatHeader, ChatForm, ChatMessages } from "./";
import { colors } from "variables";

import { fakeDetailedChat } from "mocks";

const ChatContent = () => {
  return (
    <View style={styles.wrapper}>
      <ChatHeader user={fakeDetailedChat.members![0]} />

      <View style={styles.container}>
        <ChatMessages messages={fakeDetailedChat.messages!} />

        <ChatForm />
      </View>
    </View>
  );
};

export default ChatContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.lightGray,
    flex: 1,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 10,
  },
});
