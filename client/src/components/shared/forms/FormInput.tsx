import React from "react";
import { colors } from "variables";
import { Text, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

export const isErrorStyle = (isError: boolean) =>
  isError ? { borderColor: "#ef4444", color: "#ef4444" } : {};

interface FormInputProps {
  value: string;
  error: string;
  onChangeText: (val: string) => void;
  Icon: any;
  iconName: string;
  placeholder?: string;
  iconColor?: string;
  label: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const {
    error,
    onChangeText,
    label,
    value,
    Icon,
    iconName,
    placeholder,
    iconColor = "#ccc",
  } = props;

  return (
    <TextInput
      label={label}
      style={styles.input}
      right={<TextInput.Icon name={iconName} color={iconColor} />}
      placeholder={placeholder}
      activeUnderlineColor={colors.blue}
      autoComplete={false}
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
