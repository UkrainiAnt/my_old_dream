import { KeyboardAvoidingView, View } from "react-native";
import React from "react";
import { useForm } from "hooks/helpers";
import { FormInput } from "components/shared/forms";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "components/shared";
import { FieldValidator } from "helpers/FieldValidator";
import { colors } from "variables";
import { FontAwesome5 } from "@expo/vector-icons";
import { useAuthState } from "hooks/helpers";
import { RegisterPayload } from "models";
import { SocialButtons } from ".";
import { styles } from "../styles";
import LottieView from "lottie-react-native";

const LoginForm = () => {
  const form = useForm({
    initialValues: { email: "", password: "", name: "" },
    validationRules: {
      email: FieldValidator.isEmail,
      password: FieldValidator.isLength(8, 20),
      name: FieldValidator.isNotEmpty,
    },
    errorMessages: {
      email: "email is invalid",
      password: "password is invalid",
      name: "name in invalid",
    },
  });

  const { registerUser } = useAuthState();

  const register = () => {
    const newUser: RegisterPayload = form.values;
    if (!form.validate()) {
      return;
    }
    registerUser(newUser);
  };

  return (
    <KeyboardAvoidingView
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <LottieView
        loop={false}
        style={styles.iconStyle}
        autoPlay
        source={require("assets/animations/84745-message.json")}
      />

      <FormInput
        iconColor={colors.blue}
        iconName="human"
        Icon={FontAwesome5}
        {...form.getInputProps("name")}
      />

      <FormInput
        iconName="mail"
        iconColor={colors.blue}
        Icon={Ionicons}
        {...form.getInputProps("email")}
      />

      <FormInput
        iconColor={colors.blue}
        iconName="lock"
        Icon={MaterialIcons}
        {...form.getInputProps("password")}
      />

      <Button
        width={320}
        bgColor={colors.blue}
        onPress={register}
        text="Register"
      />

      <Button
        width={320}
        style={{ marginVertical: 15 }}
        mode={"outlined"}
        bgColor={colors.blue}
        onPress={register}
        text="Sign in"
      />

      <SocialButtons />
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
