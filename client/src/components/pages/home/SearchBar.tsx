import { StyleSheet, View, TextInput } from "react-native";
import { colors } from "variables";
import { useInputValue } from "hooks/helpers";
import { FC } from "react";
import { IconButton } from "react-native-paper";

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { onClose } = props;
  const { changeValue, value, cleanValue } = useInputValue("");

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={changeValue}
      />

      <IconButton
        size={20}
        color={colors.iconColor}
        icon={"close"}
        onPress={onClose}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 14,

    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingRight: 3,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
  },

  search: {
    marginRight: 8,
  },
});
