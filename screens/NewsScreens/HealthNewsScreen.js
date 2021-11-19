import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import HealthPopularNews from "../../components/News/HealthNews/HealthPopular/HealthPopular";
import HealthToday from "../../components/News/HealthNews/HealthToday/HealthToday";

export default function HealthNewsScreen() {
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

      <HealthPopularNews />
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
      <HealthToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
