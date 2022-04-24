import { StyleSheet } from "react-native";
import { colors } from "variables";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f9fafb",
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 13,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: "#3777f0",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    height: 25,
    margin: 0,
    padding: 0,
  },
  text: {
    color: "grey",
    marginRight: 4,
    maxWidth: 300,
    overflow: "hidden",
  },

  date: {
    color: "#a3a3a3",
    overflow: "hidden",
    fontWeight: "bold",
  },
});

export default styles;
