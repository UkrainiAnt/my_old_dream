import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { Title } from "react-native-paper";
import { FormInput } from "components/shared/forms";
import { Button } from "components/shared";
import { useInputValue } from "hooks/helpers";

import { codeSelector } from "store/selectors/confirm.selectors";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { useSnackbarContext } from "hooks/context";
import { ConfirmActions } from "store/actions";
import { colors } from "variables";

const EnterConfirm = () => {
  const dispatch = useAppDispatch();
  const code = useAppSelector(codeSelector);

  const snackbar = useSnackbarContext();

  const { changeValue, error, validate, value } = useInputValue(
    "",
    (value: string) => value === code
  );

  const enterCode = () => {
    validate();

    if (error) {
      return;
    } else {
      snackbar.open({
        closable: false,
        color: "success",
        text: "Registered successfully!",
      });

      dispatch(ConfirmActions.cleanCode());
    }
  };

  return (
    <View style={styles.wrapper}>
      <LottieView
        source={require("assets/animations/74623-email-successfully-sent (1).json")}
        autoPlay
        loop={false}
        style={styles.iconStyle}
      />

      <Title style={{ marginBottom: 30 }}>
        Enter verification code from email:
      </Title>

      <FormInput
        error={error ? "some error" : ""}
        iconName={"form-textbox-password"}
        onChangeText={changeValue}
        iconColor={colors.blue}
        value={value}
        mode="outlined"
        label="Code"
        placeholder="Enter code here..."
      />

      <Button
        onPress={enterCode}
        style={{ borderRadius: 6, height: 44, justifyContent: "center" }}
        isLoading={false}
        text="Enter "
        width={320}
      />
    </View>
  );
};

export default EnterConfirm;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconStyle: {
    width: 200,
    height: 200,
  },
});
