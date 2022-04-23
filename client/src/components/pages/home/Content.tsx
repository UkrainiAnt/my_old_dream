import { StyleSheet, View } from "react-native";

import { Contact } from "components/shared/molecules";
import { Header, SearchBar } from ".";
import { fakeRooms } from "mocks";
import { FlatList } from "react-native";

const Content = () => {
  const bigList = fakeRooms.concat(fakeRooms, fakeRooms);

  return (
    <View style={styles.wrapper}>
      <Header />
      <SearchBar />
      <View style={{ height: 10 }}></View>

      <FlatList
        data={bigList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Contact contact={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
});
