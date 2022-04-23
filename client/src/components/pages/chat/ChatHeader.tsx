import { StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "variables";
import { IconButton, Title, Avatar } from "react-native-paper";
import { IUser } from "models";
import { FC } from "react";

interface ChatHeaderProps {
  user: IUser;
}

const ChatHeader: FC<ChatHeaderProps> = (props) => {
  const { user } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.flexRow}>
        <IconButton style={{ marginRight: 7 }} icon={"arrow-back"} />

        <Avatar.Image source={{ uri: user?.picture }} />

        <Title style={{ marginLeft: 9, color: colors.white }}>
          {user.name}
        </Title>
      </View>

      <View style={styles.flexRow}>
        <IconButton style={styles.icon} icon={"video-camera"} />

        <IconButton style={styles.icon} icon={"phone"} />

        <IconButton icon={"dots-vertical"} />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginTop: 25,
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginHorizontal: 10,
  },
});
