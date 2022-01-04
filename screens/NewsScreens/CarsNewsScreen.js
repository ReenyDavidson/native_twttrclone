import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import CarsPopularNews from "../../components/News/CarsNews/CarsPopular/CarsPopular";
import CarsToday from "../../components/News/CarsNews/CarsToday/CarsToday";

export default function CarsNewsScreen() {
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

      <CarsPopularNews />
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
      <CarsToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C1C",
  },
});
