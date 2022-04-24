import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { colors } from "variables";
import { useInputValue } from "hooks/helpers";
import { IconButton } from "react-native-paper";
import { FAB } from "react-native-paper";

const ChatForm = () => {
  const { value: message, changeValue, cleanValue } = useInputValue("");

  const behavior = Platform.OS === "ios" ? "padding" : "height";

  const sendMessage = () => {
    console.log(message);
    cleanValue();
  };

  const showMore = () => {
    console.log("show more");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      showMore();
    }
  };

  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <IconButton
          style={styles.icon}
          onPress={() => {}}
          color={colors.lightBlue}
          icon={"sticker-emoji"}
        />

        <TextInput
          style={{ flex: 1, fontSize: 16 }}
          onChangeText={changeValue}
          value={message}
          placeholder="Type a message..."
        />

        <IconButton
          style={styles.icon}
          onPress={() => {}}
          color={colors.lightBlue}
          icon={"camera"}
        />

        <IconButton
          style={styles.icon}
          onPress={() => {}}
          color={colors.lightBlue}
          icon={"microphone"}
        />
      </View>

      <FAB
        icon={message ? "send" : "plus"}
        onPress={() => {}}
        small
        style={{ backgroundColor: colors.lightBlue }}
      />
    </KeyboardAvoidingView>
  );
};

export default ChatForm;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    marginRight: 8,
    backgroundColor: colors.messageGray,
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 6,

    borderRadius: 40,
  },
  buttonContainer: {
    width: 42,
    height: 42,
    backgroundColor: colors.blue,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    margin: 0,
  },

  button: {
    color: colors.white,
  },
});
