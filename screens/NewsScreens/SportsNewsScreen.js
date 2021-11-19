import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SportsPopularNews from "../../components/News/SportsNews/SportsPopular/SportsPopular";
import SportsToday from "../../components/News/SportsNews/SportsToday/SportsToday";

export default function SportsNewsScreen() {
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

      <SportsPopularNews />
      <Text
        style={{
          color: "#fff",
          fontSize: 23,
          fontFamily: "QuicksandBold",
          height: 65,
          padding: 20,
        }}
      >
        Today's Pick.
      </Text>
      <SportsToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
