import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native";
import { colors } from "variables";

import { IconButton } from "components/shared";
import { Avatar, Title } from "react-native-paper";

import { useAuthState } from "hooks/helpers";

const Header = () => {
  const { user } = useAuthState();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.absoluteWrapper}>
        <Avatar.Image size={32} source={{ uri: user?.picture }} />

        <View style={styles.actionsContainer}>
          {/* <IconButton style={{ marginHorizontal: 10 }} Icon="camera" /> */}
          {/* <IconButton Icon={"camera"} /> */}
        </View>
      </View>

      <Title style={{ padding: 3 }}>Signal</Title>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 16,
    position: "relative",
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },

  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  absoluteWrapper: {
    position: "absolute",
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
