import { KeyboardAvoidingView } from "react-native";
import React from "react";
import { useForm } from "hooks/helpers";
import { styles as styleSheet } from "../styles";
import { FormInput } from "components/shared/forms";
import { Button } from "components/shared";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SocialButtons } from ".";
import { FieldValidator } from "helpers/FieldValidator";
import { colors } from "variables";
import { useAuthState } from "hooks/helpers";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const { loginUser } = useAuthState();

  const navigation = useNavigation();

  const startRegistering = () => {
    navigation.navigate("register" as any);
  };

  const form = useForm({
    initialValues: { email: "", password: "" },
    validationRules: {
      email: FieldValidator.isEmail,
      password: FieldValidator.isLength(8, 20),
    },
    errorMessages: {
      email: "email is invalid",
      password: "password is invalid",
    },
  });

  const login = async () => {
    const valid = form.validate();

    if (valid) {
      const { email, password } = form.values;
      await loginUser(email, password);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={200}
      style={styleSheet.wrapper}
    >
      <LottieView
        loop={false}
        style={styleSheet.iconStyle}
        autoPlay
        source={require("assets/animations/84745-message.json")}
      />

      <FormInput
        iconName="mail"
        iconColor={colors.blue}
        Icon={Ionicons}
        {...form.getInputProps("email")}
      />

      <FormInput
        iconName="lock"
        Icon={MaterialIcons}
        iconColor={colors.blue}
        {...form.getInputProps("password")}
      />

      <Button
        bgColor={colors.accent}
        onPress={login}
        style={{ borderRadius: 12 }}
        isLoading={false}
        text="Sign In"
        width={320}
      />

      <Button
        bgColor={colors.accent}
        onPress={startRegistering}
        mode={"outlined"}
        style={{ marginVertical: 12 }}
        isLoading={false}
        text="Register"
        width={320}
      />

      <SocialButtons />
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
