import React from "react";
import { View, StyleSheet } from "react-native";
import Feed from "../../components/Feed";
import NewTweetButton from "../../components/NewTweetButton";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
