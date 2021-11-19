import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

import NewsHeaderImage from "../../../NewsHeaderImage";

export default function SportsList({ item }) {
  return (
    <View style={styles.container}>
      <NewsHeaderImage image={item.urlToImage} height={180} width={350} borderRadius={15} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.tinies}>
          <Text style={styles.source}>{item.source.name}</Text>
          <Text style={styles.date}>{moment(item.publishedAt).fromNow()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    width: "100%",
    backgroundColor: "#282C35",
  },
  titleContainer: {
    width: 300,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "QuicksandSemiBold",
    color: "#fff",
    marginTop: 5,
  },
  source: {
    fontSize: 12,
    fontFamily: "QuicksandBold",
    color: "grey",
  },

  date: {
    fontSize: 12,
    fontFamily: "QuicksandBold",
    marginLeft: 6,
    color: "grey",
  },
  tinies: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 5,
    width: 260,
  },
});
