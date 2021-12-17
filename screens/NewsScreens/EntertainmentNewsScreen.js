import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import EntertainmentPopularNews from "../../components/News/EntertainmentNews/EntertainmentPopular/EntertainmentPopular";
import EntertainmentToday from "../../components/News/EntertainmentNews/EntertainmentToday/EntertainmentToday";

export default function EntertainmentNewsScreen() {
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

      <EntertainmentPopularNews />
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
      <EntertainmentToday />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
  },
});
