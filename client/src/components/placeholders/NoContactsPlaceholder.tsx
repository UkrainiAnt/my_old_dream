import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { Title } from "react-native-paper";
import { Button } from "react-native-paper";
import { colors } from "variables";

const NoContactsPlaceholder = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        autoPlay
        loop={true}
        source={require("assets/animations/11646-no-activity-animation.json")}
        style={styles.image}
      />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Title>No chats found, </Title>
        <Title style={{ color: colors.messageBlue }}>Create new one</Title>
      </View>
    </View>
  );
};

export default NoContactsPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
});
