import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native";
import { colors } from "variables";

import { IconButton } from "react-native-paper";
import { Title } from "react-native-paper";

import { useAuthState } from "hooks/helpers";
import { SearchBar } from "./";
import { fakeUser } from "mocks/FakeUser";

import { useToggle } from "hooks/helpers";

const Header = () => {
  const { user } = useAuthState();

  const [isSearching, toggleSearch] = useToggle(false);

  return (
    <View style={{ backgroundColor: colors.blue }}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.actionsContainer}>
          <IconButton icon="menu" onPress={() => {}} color={colors.white} />

          <Image style={styles.avatar} source={{ uri: fakeUser.picture }} />
          <Title style={{ padding: 0, color: colors.white }}>Signal</Title>
        </View>

        <IconButton
          color="white"
          onPress={toggleSearch}
          icon={isSearching ? "close" : "magnify"}
        />
      </SafeAreaView>
      {isSearching && (
        <View style={{ marginBottom: 12 }}>
          <SearchBar onClose={toggleSearch} />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 40,
    paddingHorizontal: 5,
    position: "relative",
    paddingBottom: 12,

    flexDirection: "row",
    backgroundColor: colors.header,
    alignItems: "center",
    justifyContent: "space-between",
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

  avatar: {
    borderRadius: 20,
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
