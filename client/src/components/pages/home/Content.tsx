import { StyleSheet, View } from "react-native";
import { Header, Chats } from ".";
import { FAB } from "react-native-paper";
import { colors } from "variables";
import { useNavigation } from "@react-navigation/native";

const Content = () => {
  const navigation = useNavigation();

  const navigateToAddContact = () => {
    navigation.navigate("add-contact" as any);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Header />

        <View style={{ height: 10 }}></View>

        <Chats />
      </View>
      <FAB
        onPress={navigateToAddContact}
        style={{
          bottom: 20,
          right: 10,
          backgroundColor: colors.blue,
          position: "absolute",
        }}
        color={colors.white}
        icon={"account-multiple-plus-outline"}
      />
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
});
