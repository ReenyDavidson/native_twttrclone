import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, EvilIcons } from "react-native-vector-icons/";

const Footer = ({ tweet }) => {
  const [click, setclick] = useState({ name: "heart-outline", color: "#36454F" });
  const onClick = () => {
    setclick({ name: "heart", color: "red" });
  };
  return (
    <View style={styles.footerContainer}>
      <View style={styles.IconContainer}>
        <Ionicons name={"chatbubble-outline"} size={18} color={"#36454F"} />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.IconContainer}>
        <EvilIcons name={"retweet"} size={26} color={"#36454F"} />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.IconContainer}>
        <Ionicons name={click.name} size={18} color={click.color} onPress={onClick} />
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.IconContainer}>
        <Ionicons
          name={"share-social-outline"}
          size={18}
          color={"#36454F"}
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
    marginTop: 5,
  },
  IconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    marginLeft: 8,
    color: "#36454F",
    fontFamily: "QuicksandMedium",
  },
});
