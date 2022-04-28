import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

import { useAddContactContext } from "hooks/context";
import { FormInput } from "components/shared/forms";
import { useForm } from "hooks/helpers";
import { colors } from "variables";

const AddContactForm = () => {
  const { currentContact } = useAddContactContext();

  const { values, getInputProps } = useForm({
    initialValues: {
      name: currentContact?.name,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Avatar.Image size={140} source={{ uri: currentContact?.picture }} />

      <View style={{ paddingVertical: 20 }}>
        <FormInput
          dense
          disabled
          mode="outlined"
          style={{ backgroundColor: colors.white }}
          placeholder={"Name... (required)"}
          {...getInputProps("name")}
        />
      </View>
    </View>
  );
};

export default AddContactForm;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
