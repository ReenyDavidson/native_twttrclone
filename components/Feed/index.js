import React from "react";
import { View, Text, FlatList } from "react-native";
import Tweets from "../../data/tweets";
import Tweet from "../Tweet";

const Feed = () => {
  return (
    <View style={{ width: "100%", backgroundColor: "#FFF" }}>
      <FlatList
        data={Tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
