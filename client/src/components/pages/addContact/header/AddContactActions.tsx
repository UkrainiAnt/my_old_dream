import { StyleSheet, View } from "react-native";
import { colors, screenSizes } from "variables";

import { IconButton, Title } from "react-native-paper";
import { FC } from "react";
import { useAddContactContext } from "hooks/context";
import { useNavigation } from "@react-navigation/native";

const AddContactActions: FC = (props) => {
  const { currentContact, onCreate, setContact } = useAddContactContext();

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          size={27}
          onPress={goBack}
          color={colors.white}
          icon={"arrow-left"}
        />

        <Title style={{ color: colors.white }}>Add contact</Title>
      </View>

      {currentContact && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <IconButton
            size={27}
            onLongPress={() => {}}
            onPress={() => setContact(null)}
            color={colors.white}
            icon={"close"}
          />

          <IconButton
            size={27}
            onPress={onCreate}
            color={colors.white}
            icon={"check"}
            style={{ margin: 0 }}
          />
        </View>
      )}
    </View>
  );
};

export default AddContactActions;

const styles = StyleSheet.create({
  wrapper: {
    width: screenSizes.width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
