import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import TechnologyPopularNews from "../../components/News/TechNews/TechPopular/TechPopular";
import TechnologyToday from "../../components/News/TechNews/TechToday/TechToday";

export default function TechnologyNewsScreen() {
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

      <TechnologyPopularNews />
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
      <TechnologyToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
  },
});
