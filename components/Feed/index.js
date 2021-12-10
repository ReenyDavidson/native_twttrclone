import React from "react";
import { View, FlatList } from "react-native";
import NewTweet from "../NewTweet";

import Tweet from "../Tweet";

const Feed = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log(typeof submitHandler);
  }, []);

  const submitHandler = (text, image) => {
    setData((prevData) => {
      return [
        {
          id: Math.random().toString(),
          text: text,
          image: image,
        },
        ...prevData,
      ];
    });
  };
  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#000" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Tweet data={item} />}
        z
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
