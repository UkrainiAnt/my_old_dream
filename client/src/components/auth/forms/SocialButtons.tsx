import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouting, useAuthState } from "hooks/helpers";
import { Button } from "components/shared/buttons";

const SocialButtons = () => {
  const { signInWithGoogle } = useAuthState();
  const { navigateTo } = useRouting();

  const singIntoGoogle = async () => {
    signInWithGoogle()
      .then(navigateTo("home"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button
        icon={"google"}
        onPress={singIntoGoogle}
        style={styles.iconStyle}
      />
      <Button
        onPress={singIntoGoogle}
        icon={"github"}
        style={styles.iconStyle}
      />
      <Button
        onPress={singIntoGoogle}
        icon={"facebook"}
        style={styles.iconStyle}
      />
    </View>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    position: "relative",
    borderRadius: 100,
  },

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  iconStyle: {
    width: "30%",
    borderRadius: 15,
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
