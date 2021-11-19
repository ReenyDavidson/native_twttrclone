import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BusinessTodayList from "../BusinessToday/index";

const BusinessToday = () => {
  const [data, setData] = useState([]);

  const api = `https://newsapi.org/v2/everything?q=business&from=${new Date()
    .toISOString()
    .slice(0, 10)}&to=${new Date()
    .toISOString()
    .slice(0, 10)}&sortBy=popularity&apiKey=0a2f0af9df9c42eb99cd93e86fe48da0`;

  const getData = async () => {
    try {
      const response = await fetch(api);
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <FlatList
        horizontal={false}
        data={data}
        renderItem={({ item }) => <BusinessTodayList item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BusinessToday;

const styles = StyleSheet.create({});
