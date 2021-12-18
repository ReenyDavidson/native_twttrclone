import React from "react";
import { View, FlatList } from "react-native";
import firebase from "firebase";

import Tweet from "../Tweet";

const Feed = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        setData(posts);
      });
  }, []);

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#000" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Tweet data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
