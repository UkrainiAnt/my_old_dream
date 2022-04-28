import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const MessagesLoader = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        style={styles.image}
        source={require("assets/animations/small-loading.json")}
      />
    </View>
  );
};

export default MessagesLoader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "",
  },
});
