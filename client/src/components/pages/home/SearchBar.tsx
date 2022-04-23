import { StyleSheet, View, TextInput } from "react-native";
import { colors } from "variables";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";
import { useInputValue } from "hooks/helpers";

const SearchBar = () => {
  const { changeValue, value, cleanValue } = useInputValue("");

  return (
    <View style={styles.wrapper}>
      <Ionicons
        style={styles.search}
        name="ios-search-sharp"
        size={24}
        color={colors.iconColor}
      />

      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={changeValue}
      />

      <IconButton onPress={cleanValue} color={colors.blue} icon={"search"} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 14,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: colors.grayBg,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  input: {
    flex: 1,
  },

  search: {
    marginRight: 8,
  },
});
