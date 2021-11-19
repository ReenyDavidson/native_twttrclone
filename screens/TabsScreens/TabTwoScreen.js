import React from "react";
import { View, StyleSheet } from "react-native";

import NewsHeader from "../../components/NewsHeder";
import NewTweetButton from "../../components/NewTweetButton";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <NewsHeader />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
