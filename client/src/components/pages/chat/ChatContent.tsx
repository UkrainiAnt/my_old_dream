import { StyleSheet, View } from "react-native";
import { ChatHeader, ChatForm, ChatMessages } from "./";
import { colors } from "variables";

import { useChatContext } from "hooks/context";
import { useAuthState } from "hooks/helpers";

const ChatContent = () => {
  const { selectedChat } = useChatContext();
  const { user } = useAuthState();

  const notMe = selectedChat?.users.find((item) => item.id !== user?.id);

  return (
    <View style={styles.wrapper}>
      <ChatHeader user={notMe!} />

      <View style={styles.container}>
        <ChatMessages />

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
