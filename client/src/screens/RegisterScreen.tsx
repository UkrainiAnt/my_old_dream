import { StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useKeyValue } from "hooks/helpers";
import { RegisterForm } from "../components/auth/forms";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.container}>
        <RegisterForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginBottom: 30,
  },
});
