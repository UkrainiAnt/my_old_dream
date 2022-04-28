import { StyleSheet } from "react-native";
import { colors } from "variables";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 9,
    marginVertical: 7,
    marginLeft: 3,
    paddingBottom: 21,
    borderRadius: 10,
    maxWidth: "75%",
    minWidth: 60,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  messageReply: {
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 5,
  },
  leftContainer: {
    backgroundColor: colors.messageBlue,
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: colors.grayBg,
    marginLeft: "auto",
    marginRight: 10,
    alignItems: "flex-end",
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 5,
    right: 3,
  },

  date: {
    color: "#a3a3a3",
    fontSize: 10,
    fontWeight: "bold",
    marginHorizontal: 3,
    overflow: "hidden",
  },
});

export default styles;
