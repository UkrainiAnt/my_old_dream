import { StyleSheet, Text, View } from "react-native";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { codeSelector } from "store/selectors/confirm.selectors";

const EnterConfirm = () => {
  const dispatch = useAppDispatch();
  const code = useAppSelector(codeSelector);

  return (
    <View>
      <Text>{code}</Text>
    </View>
  );
};

export default EnterConfirm;

const styles = StyleSheet.create({});
