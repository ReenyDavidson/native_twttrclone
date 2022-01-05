import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import TravelPopularNews from "../../components/News/TravelNews/TravelPopular/TravelPopular";
import TravelToday from "../../components/News/TravelNews/TravelToday/TravelToday";

export default function TravelNewsScreen() {
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

      <TravelPopularNews />
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
      <TravelToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C1C",
  },
});
