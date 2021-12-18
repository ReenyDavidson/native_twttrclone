import React from "react";
import { View, StyleSheet } from "react-native";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const Tweet = ({ data }) => {
  return (
    <View style={styles.container}>
      <LeftContainer />
      <RightContainer data={data} />
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
