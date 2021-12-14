import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import CryptoPopularNews from "../../components/News/CryptoNews/CryptoPopularNews/CryptoPopularNews";
import CryptoToday from "../../components/News/CryptoNews/CryptoToday/CryptoToday";

export default function CryptoNewsScreen() {
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

      <CryptoPopularNews />
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
      <CryptoToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C1C",
  },
});
