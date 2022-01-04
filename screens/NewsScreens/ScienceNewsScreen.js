import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SciencePopularNews from "../../components/News/ScienceNews/SciencePopular/SciencePopular";
import ScienceToday from "../../components/News/ScienceNews/ScienceToday/ScienceToday";

export default function ScienceNewsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          color: "#fff",
          backgroundColor: "#282C35",
          fontSize: 20,
          fontFamily: "QuicksandBold",
          height: 40,
          padding: 10,
        }}
      >
        Popular News
      </Text>

      <SciencePopularNews />
      <Text
        style={{
          color: "#fff",
          fontSize: 23,
          fontFamily: "QuicksandBold",
          height: 65,
          padding: 20,
        }}
      >
        Latest News
      </Text>
      <ScienceToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C1C",
  },
});
