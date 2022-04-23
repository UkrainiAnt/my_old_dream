import { Text, View, Pressable } from "react-native";
import { FC } from "react";
import { IChat } from "models";
import { styles } from "./index";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface ContactProps {
  contact: IChat;
}

const Contact: FC<ContactProps> = (props) => {
  const { contact } = props;

  const navigation = useNavigation();

  const contactPicture = contact.isGroup
    ? contact.picture
    : contact.members[1].picture;

  const contactName = contact.isGroup ? contact.name : contact.members[1].name;

  const pushToChat = () => {
    navigation.navigate("chat" as never);
  };

  return (
    <Pressable onPress={pushToChat} style={styles.wrapper}>
      <Avatar.Image
        size={50}
        style={styles.image}
        source={{
          uri: contactPicture,
        }}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{3}</Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{contactName}</Text>
          <Text style={styles.text}>11 May</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {contact.lastMessage.body.toString()}
        </Text>
      </View>
    </Pressable>
  );
};

export default Contact;
