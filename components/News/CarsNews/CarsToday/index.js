import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import moment from "moment";

import NewsHeaderImage from "../../../NewsHeaderImage";

const CarsTodayList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("CarTodayDetailScreen", item);
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.tinies}>
          <Text style={styles.source}>{item.source.name}</Text>
          <Text style={styles.date}>{moment(item.publishedAt).fromNow()}</Text>
        </View>
      </View>
      <NewsHeaderImage image={item.urlToImage} height={80} width={130} borderRadius={5} />
    </Pressable>
  );
};

export default CarsTodayList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    width: "100%",
    backgroundColor: "#0C0C1C",
  },
  titleContainer: {
    width: 250,
    backgroundColor: "#0C0C1C",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 2,
  },
  title: {
    fontSize: 15,
    fontFamily: "QuicksandBold",
    color: "#fff",
    marginTop: 11,
    width: "90%",
    bottom: 16,
  },
  source: {
    fontSize: 12,
    fontFamily: "QuicksandBold",
    color: "grey",
    bottom: 10,
  },
  date: {
    fontSize: 12,
    fontFamily: "QuicksandBold",
    color: "grey",
    bottom: 10,
  },
});
