import { StyleSheet, Text, View } from "react-native";
import AddContactContent from "components/pages/addContact";

const AddContact = () => {
  return (
    <View style={styles.wrapper}>
      <AddContactContent />
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
