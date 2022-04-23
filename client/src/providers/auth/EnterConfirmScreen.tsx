import { StyleSheet, View } from "react-native";
import { EnterConfirm } from "components/auth/forms/";

const EnterConfirmScreen = () => {
  return (
    <View style={styles.wrapper}>
      <EnterConfirm />
    </View>
  );
};

export default EnterConfirmScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
