import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const UserLoader = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        autoPlay
        loop
        style={styles.loader}
        source={require("assets/animations/small-loading.json")}
      />
    </View>
  );
};

export default UserLoader;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loader: {
    width: 240,
    height: 240,
  },
});
