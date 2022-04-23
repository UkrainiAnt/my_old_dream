import { StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { Button as BButton } from "react-native-paper";
import { ReactElement } from "react";
import { colors } from "variables";

interface ButtonProps {
  onPress?: () => void;
  text?: string | ReactElement<any, any>;
  bgColor?: string | keyof typeof colors;
  disabled?: boolean;
  isLoading?: boolean;
  mode?: "contained" | "outlined" | "text";
  style?: ViewStyle;
  width?: number | string;
  icon?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onPress,
    text,
    bgColor = colors.buttonColor,
    disabled = false,
    isLoading = false,
    style,
    icon,
    mode = "contained",
    width = "100%",
  } = props;
  return (
    <BButton
      color={colors.buttonColor}
      style={[{ width }, style]}
      mode={mode}
      contentStyle={{ width: "100%" }}
      onPress={onPress}
      disabled={disabled}
      icon={icon}
      loading={isLoading}
    >
      {text}
    </BButton>
  );
};

export default Button;
