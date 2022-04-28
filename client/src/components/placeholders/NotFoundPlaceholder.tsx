import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import { Title } from "react-native-paper";
import { colors } from "variables";

const NotfoundPlaceholder = () => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        style={styles.imageStyle}
        source={require("assets/animations/96526-search-not-found.json")}
      />

      <Title style={{ fontSize: 23, color: colors.iconColor }}>
        Users not found
      </Title>
    </View>
  );
};

export default NotfoundPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    width: 200,
    height: 200,
  },
});
