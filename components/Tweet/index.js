import React from "react";
import { View, StyleSheet } from "react-native";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
      <LeftContainer tweet={tweet} />
      <RightContainer tweet={tweet} />
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    padding: 15,
    borderBottomWidth: 0.15,
    borderBottomColor: "#282C35",
    backgroundColor: "#0C0C1C",
    paddingVertical: 25,
  },
});
