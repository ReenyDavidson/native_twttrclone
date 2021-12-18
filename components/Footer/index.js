import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons/";

const Footer = () => {
  const [likes, setLikes] = useState(null);
  const [comments, setComments] = useState(null);

  const [click, setclick] = useState({ name: "heart-outline", color: "#86FF" });
  const onClick = () => {
    if (click.name === "heart-outline") {
      setclick({ name: "heart", color: "#66FF00" });
      setLikes(likes + 1);
    } else if (click.name === "heart") {
      setclick({ name: "heart-outline", color: "#86FF" });
      if (likes === 0) {
        setLikes(" ");
      } else {
        setLikes(likes - 1);
      }
    }
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.IconContainer}>
        <Ionicons name={"chatbubble-outline"} size={24} color={"#FF8C"} />
        <Text style={styles.number}></Text>
      </View>
      <View style={styles.IconContainer}>
        <Ionicons name={click.name} size={24} color={click.color} onPress={onClick} />
        <Text style={styles.number}>{likes}</Text>
      </View>
      <View style={styles.IconContainer}>
        <Ionicons
          name={"share-social-outline"}
          size={24}
          color={"#248ED2"}
          fontFamily={"QuicksandBold"}
        />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    width: "90%",
    marginHorizontal: "2%",
  },
  IconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    marginLeft: 8,
    fontSize: 16,
    color: "#6699FF",
    fontFamily: "QuicksandMedium",
  },
});
