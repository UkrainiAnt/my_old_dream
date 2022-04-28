import { StyleSheet, View } from "react-native";
import { colors } from "variables";

import { AddContactActions, AddContactSearch } from "./";
import { FC } from "react";
import { useAddContactContext } from "hooks/context";

const AddContactHeader: FC = (props) => {
  const { setSearch, query, currentContact } = useAddContactContext();

  return (
    <View style={styles.wrapper}>
      <AddContactActions />
      <View style={{ padding: 14, paddingTop: 10 }}>
        <AddContactSearch onChangeText={setSearch} value={query} />
      </View>
    </View>
  );
};

export default AddContactHeader;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 25,
    height: 120,
    paddingBottom: 12,
    backgroundColor: colors.addHeader,
  },
});
