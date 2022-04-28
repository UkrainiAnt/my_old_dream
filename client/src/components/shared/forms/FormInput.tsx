import React from "react";
import { colors } from "variables";
import { Text, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

export const isErrorStyle = (isError: boolean) =>
  isError ? { borderColor: "#ef4444", color: "#ef4444" } : {};

// @ts-ignore
interface FormInputProps extends TextInputProps {
  value?: string;
  error?: string;
  onChangeText: (val: string) => void;
  iconName?: string;
  placeholder?: string;
  iconColor?: string;
  label: string;
  mode?: "outlined" | "flat";
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const {
    error,
    onChangeText,
    label = "",
    value = "",
    iconName,
    placeholder,
    mode = "flat",
    iconColor = "#ccc",
    ...other
  } = props;

  return (
    <TextInput
      label={label}
      {...other}
      style={styles.input}
      activeOutlineColor={error ? colors.error : colors.blue}
      mode={mode}
      textBreakStrategy={"highQuality"}
      right={
        <TextInput.Icon
          name={iconName}
          color={error ? colors.error : iconColor}
        />
      }
      placeholder={placeholder}
      activeUnderlineColor={error ? colors.error : colors.blue}
      autoComplete={false}
      error={!!error}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    width: 320,
    marginBottom: 14,
  },
});
