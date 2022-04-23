import { StyleSheet, View } from "react-native";
import { default as ChatContent } from "components/pages/chat";

const ChatScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ChatContent />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
