import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { IconButton as Button } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

interface IconButtonProps {
  Icon: IconSource;
  onPress?: () => void;
  style?: ViewStyle;
  isButton?: boolean;
  isRounded?: boolean;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    Icon,
    onPress,
    style = {},
    isButton = false,
    isRounded = false,
  } = props;

  if (isButton) {
    return (
      <Button icon={Icon} onPress={onPress ? onPress : () => {}}>
        {Icon}
      </Button>
    );
  }

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {Icon}
    </TouchableOpacity>
  );
};

export default IconButton;
