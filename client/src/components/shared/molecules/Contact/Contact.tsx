import { Text, View, Pressable, Image } from "react-native";
import { FC } from "react";
import { IChat } from "models";
import { styles } from "./index";
import { Avatar, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { dayts } from "lib/dayts";
import { CheckIcon } from "components/shared/other";

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
      <Image
        style={styles.image}
        source={{
          uri: contactPicture,
        }}
      />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Title style={styles.name}>{contactName}</Title>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckIcon sended={true} />

            <Text style={styles.date}>
              {dayts(contact.lastMessage.createdAt).fromNow()}
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginRight: 4,
          }}
        >
          <Text numberOfLines={1} style={styles.text}>
            {contact.lastMessage.body.toString()}
          </Text>

          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{3}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Contact;
