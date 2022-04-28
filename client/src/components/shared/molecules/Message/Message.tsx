import { IMessage } from "models";
import { Pressable, Text, View } from "react-native";
import { styles } from "./";
import { FC, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { dayts } from "lib/dayts";
import { CheckIcon } from "components/shared/other";
import { Avatar } from "react-native-paper";

import { useAuthState } from "hooks/helpers";

interface Message {
  message: IMessage<any>;
}

const Message: FC<Message> = (props) => {
  const { message } = props;

  const { user } = useAuthState();

  const isMe = message?.sender?.id === user?.id;
  const isDeleted = false;

  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
      {!isMe && (
        <Avatar.Image
          style={{ marginBottom: 10 }}
          size={32}
          source={{ uri: message.sender?.picture }}
        />
      )}
      <Pressable
        onLongPress={() => console.log("long press action")}
        style={[
          styles.container,
          isMe ? styles.rightContainer : styles.leftContainer,
        ]}
      >
        <Text style={{ color: isMe ? "black" : "white" }}>
          {isDeleted ? "message deleted" : message.body + ""}
        </Text>

        <View style={styles.row}>
          {isMe && !!message.status && message.status !== "SENT" && (
            <Ionicons
              name={
                message.status === "DELIVERED" ? "checkmark" : "checkmark-done"
              }
              size={16}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />
          )}
        </View>

        <View style={styles.infoContainer}>
          <Text style={{ ...styles.date, color: isMe ? "#94a3b8" : "#e2e8f0" }}>
            {dayts(message.createdAt).format("HH:m")}
          </Text>
          {isMe && <CheckIcon />}
        </View>
      </Pressable>
    </View>
  );
};

export default Message;
