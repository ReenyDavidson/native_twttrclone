import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import BusinessPopularNews from "../../components/News/BusinessNews/BusinessPopular/BusinessPopularNews";
import BusinessToday from "../../components/News/BusinessNews/BusinessToday/BusinessToday";

export default function BusinessNewsScreen() {
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

      <BusinessPopularNews />
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
      <BusinessToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
