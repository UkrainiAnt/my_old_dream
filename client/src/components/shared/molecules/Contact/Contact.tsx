import { Text, View, Image } from "react-native";
import { FC } from "react";
import { IChat } from "models";
import { styles } from "./index";
import { Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { dayts } from "lib/dayts";
import { CheckIcon } from "components/shared/other";
import { TouchableRipple } from "react-native-paper";

import { useChatContext } from "hooks/context/";
import { useAuthState } from "hooks/helpers";

interface ContactProps {
  contact: IChat;
}

const Contact: FC<ContactProps> = (props) => {
  const { contact } = props;

  const { selectChat } = useChatContext();
  const { user } = useAuthState();

  const notMe = contact.users.find((item) => item.id !== user!.id);

  const navigation = useNavigation();

  const contactPicture = contact.isGroup ? contact.picture : notMe?.picture;

  const contactName = contact.isGroup ? contact.name : notMe?.name;

  const pushToChat = () => {
    selectChat(contact);
    navigation.navigate("chat" as never);
  };

  return (
    <TouchableRipple
      onLongPress={() => {}}
      onPress={pushToChat}
      style={styles.wrapper}
    >
      <>
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

              <Text style={styles.date}>{dayts(Date.now()).fromNow()}</Text>
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
              Last message not implemented
            </Text>

            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{3}</Text>
            </View>
          </View>
        </View>
      </>
    </TouchableRipple>
  );
};

export default Contact;
