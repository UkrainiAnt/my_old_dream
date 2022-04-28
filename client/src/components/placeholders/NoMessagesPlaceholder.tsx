import { StyleSheet, View } from "react-native";
import LottieFiles from "lottie-react-native";
import { Button } from "react-native-paper";

import { colors } from "variables";
import { FC } from "react";

interface NoMessagePlaceholderProps {
  onPress: () => void;
}

const NoMessagesPlaceholder: FC<NoMessagePlaceholderProps> = (props) => {
  const { onPress } = props;

  return (
    <View style={styles.wrapper}>
      <LottieFiles
        style={styles.image}
        autoPlay
        loop={true}
        source={require("assets/animations/greeting.json")}
      />

      <Button
        style={{ marginVertical: 10, borderRadius: 30 }}
        mode="contained"
        onPress={onPress}
        color={colors.lightBlue}
      >
        Start messaging
      </Button>
    </View>
  );
};

export default NoMessagesPlaceholder;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 240,
    height: 240,
  },
});
