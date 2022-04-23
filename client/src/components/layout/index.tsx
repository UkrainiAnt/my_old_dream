import { StyleSheet, View } from "react-native";
import React from "react";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
