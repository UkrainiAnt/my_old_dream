import { IMessage } from "models";
import { Pressable, Text, View } from "react-native";
import { styles } from "./";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";

interface Message {
  message: IMessage<any>;
}

const Message: FC<Message> = (props) => {
  const { message } = props;

  const isMe = true;
  const isDeleted = false;

  return (
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
    </Pressable>
  );
};

export default Message;
