import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import TechTodayDetail from "../../components/NewsDetail/TechDetail/TechTodayDetail";

export default function TechTodayDetailScreen() {
  const navigation = useNavigation();
  const item = navigation.getState();
  return (
    <View>
      <Text>{JSON.stringify(item.routes[2].params.content)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
