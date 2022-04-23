import { StyleSheet, View } from "react-native";
import React from "react";
import { Layout } from "components/layout";
import { default as HomeScreenContent } from "components/pages/home";

const HomeScreen = () => {
  return (
    <Layout>
      <View style={styles.wrapper}>
        <HomeScreenContent />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
