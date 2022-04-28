import { IUser } from "models";
import { StyleSheet, View } from "react-native";
import { Avatar, TouchableRipple } from "react-native-paper";
import { memo, FC } from "react";
import { Title, Text } from "react-native-paper";
import { IconButton } from "react-native-paper";

import { useAddContactContext } from "hooks/context";

interface UserItemProps extends IUser {}

const UserItem: FC<UserItemProps> = (props) => {
  const { picture, email, name } = props;

  const { query, setContact } = useAddContactContext();

  return (
    <TouchableRipple
      onPress={() => {
        setContact(props);
      }}
      onLongPress={() => {}}
      style={styles.wrapper}
      rippleColor={"#a1a1aa"}
    >
      <>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image size={50} source={{ uri: picture }} />

          <View style={{ marginHorizontal: 6, marginBottom: 4 }}>
            <Title style={styles.name}>{name}</Title>
            <Text style={styles.date}>{email}</Text>
          </View>
        </View>
        <IconButton onPress={() => {}} icon={"dots-vertical"} />
      </>
    </TouchableRipple>
  );
};

export default memo(UserItem);

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingVertical: 7,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    height: 25,
    margin: 0,
    padding: 0,
  },
  text: {
    color: "grey",
    marginRight: 4,
    maxWidth: 300,
    overflow: "hidden",
  },

  date: {
    color: "#a3a3a3",
    overflow: "hidden",
    fontWeight: "bold",
  },
});
