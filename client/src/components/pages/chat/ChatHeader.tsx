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
import { useNavigation } from "@react-navigation/native";

interface ChatHeaderProps {
  user: IUser;
}

const ChatHeader: FC<ChatHeaderProps> = (props) => {
  const { user } = props;

  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.flexRow}>
        <IconButton
          onPress={back}
          style={{ marginRight: 7 }}
          size={28}
          color={colors.white}
          icon={"arrow-left"}
        />

        <Avatar.Image size={34} source={{ uri: user?.picture }} />

        <Title style={{ marginLeft: 9, color: colors.white, fontSize: 17 }}>
          {user.name}
        </Title>
      </View>

      <View style={styles.flexRow}>
        <IconButton
          color={colors.white}
          onPress={() => {}}
          style={{ margin: 0 }}
          icon={"video"}
          size={28}
        />

        <IconButton
          color={colors.white}
          onPress={() => {}}
          style={{ margin: 0 }}
          icon={"phone"}
        />

        <IconButton
          color={colors.white}
          onPress={() => {}}
          style={{ margin: 0 }}
          icon={"dots-vertical"}
        />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 7,
    paddingTop: 35,
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
