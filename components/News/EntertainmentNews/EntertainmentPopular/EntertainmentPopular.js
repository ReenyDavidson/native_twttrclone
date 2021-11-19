import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import EntertainmentList from "./index";

export default function EntertainmentPopularNews() {
  const [data, setData] = useState([]);

  const api =
    "https://newsapi.org/v2/everything?q=entertainment&sortBy=popularity&page=1&apiKey=0a2f0af9df9c42eb99cd93e86fe48da0";

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
        horizontal={true}
        data={data}
        renderItem={({ item }) => <EntertainmentList item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
