import { StyleSheet, Text, View } from "react-native";
import { useAddContactContext } from "hooks/context";
import { memo } from "react";

import { ScrollView } from "react-native";
import { UserLoader } from "./";
import { useUserSearch } from "hooks/queries";

import { UserItem } from "components/shared/molecules/userItem";
import { NotFoundPlaceholder } from "components/placeholders";

const SearchUsers = () => {
  const { query } = useAddContactContext();
  const { users, isLoading, refetch } = useUserSearch(query);

  const userComponents = users?.map((item) => (
    <UserItem key={item.id} {...item} />
  ));

  if (isLoading) {
    return <UserLoader />;
  }

  return (
    <View style={styles.wrapper}>
      {!users!.length ? (
        <NotFoundPlaceholder />
      ) : (
        <ScrollView>{userComponents}</ScrollView>
      )}
    </View>
  );
};

export default memo(SearchUsers);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flex: 1,
    paddingTop: 25,
  },
});
