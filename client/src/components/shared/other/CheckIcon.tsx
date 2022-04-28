import { StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "variables";

interface CheckIconProps {
  sended?: boolean;
  viewed?: boolean;
}

const CheckIcon: FC<CheckIconProps> = (props) => {
  const { sended = false, viewed = false } = props;

  return (
    <View style={{ marginHorizontal: 3 }}>
      <MaterialCommunityIcons
        color={colors.blue}
        name={!sended ? "circle-outline" : viewed ? "check-all" : "check-bold"}
      />
    </View>
  );
};

export default CheckIcon;
