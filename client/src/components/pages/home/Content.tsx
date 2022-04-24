import { StyleSheet, View } from "react-native";

import { Contact } from "components/shared/molecules";
import { Header } from ".";
import { fakeRooms } from "mocks";
import { FlatList } from "react-native";
import { FAB } from "react-native-paper";
import { colors } from "variables";

const Content = () => {
  const bigList = fakeRooms.concat(fakeRooms, fakeRooms);

  return (
    <>
      <View style={styles.wrapper}>
        <Header />

        <View style={{ height: 10 }}></View>

        <FlatList
          data={bigList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Contact contact={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FAB
        label=""
        onPress={() => {}}
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
