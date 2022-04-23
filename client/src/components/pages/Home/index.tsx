import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "components/shared";
import { colors } from "variables";
import { useAuthState } from "hooks/helpers";

export const HomeScreenContent = () => {
  const { logout, user } = useAuthState();
  return (
    <View style={styles.wrapper}>
      <Button bgColor={colors.blue} onPress={logout} text="Logout" />

      <Text style={styles.text}>{JSON.stringify(user)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.secondary,
    margin: 10,
    textAlign: "center",
  },
});
