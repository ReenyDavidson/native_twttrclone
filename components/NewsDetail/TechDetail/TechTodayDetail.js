import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TechTodayDetail = ({ item }) => {
  return (
    <View>
      <Text>{item.content}</Text>
    </View>
  );
};

export default TechTodayDetail;

const styles = StyleSheet.create({});
