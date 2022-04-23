import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "variables";
import { useInputValue } from "hooks/helpers";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";

const ChatForm = () => {
  const { value: message, changeValue, cleanValue } = useInputValue("");

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

  const buttonIcon = message ? (
    <Ionicons name="send" size={20} color={colors.white} />
  ) : (
    <FontAwesome5 name="plus" size={20} color={colors.white} />
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <IconButton icon={"smile"} />

        <TextInput
          style={{ flex: 1 }}
          onChangeText={changeValue}
          value={message}
          placeholder="Type a message..."
        />

        <IconButton style={{ marginRight: 10 }} icon={"camera"} />

        <IconButton icon={"microphone"} />
      </View>

      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        {buttonIcon}
      </TouchableOpacity>
    </View>
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
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  buttonContainer: {
    width: 42,
    height: 42,
    backgroundColor: colors.blue,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    color: colors.white,
  },
});
