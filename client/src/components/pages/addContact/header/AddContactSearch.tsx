import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { FC } from "react";

interface AddContactSearchProps {
  value: string;
  onChangeText: (val: string) => void;
}

const AddContactSearch: FC<AddContactSearchProps> = (props) => {
  const { onChangeText, value } = props;

  return (
    <View>
      <Searchbar
        placeholder="Search for users..."
        style={{ borderRadius: 10 }}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default AddContactSearch;

const styles = StyleSheet.create({});
