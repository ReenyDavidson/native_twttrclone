import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import FashionPopularNews from "../../components/News/FashionNews/FashionPopular/FashionPopular";
import FashionToday from "../../components/News/FashionNews/FashionToday/FashionToday";

export default function FashionNewsScreen() {
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

      <FashionPopularNews />
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
      <FashionToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C1C",
  },
});
