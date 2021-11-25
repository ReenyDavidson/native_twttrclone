import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons/";

const Footer = ({ tweet }) => {
  const [click, setclick] = useState({ name: "heart-outline", color: "#6699cc" });
  const onClick = () => {
    setclick({ name: "heart", color: "red" });
  };
  return (
    <View style={styles.footerContainer}>
      <View style={styles.IconContainer}>
        <Ionicons name={"chatbubble-outline"} size={22} color={"#6699"} />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.IconContainer}>
        <Ionicons name={click.name} size={22} color={click.color} onPress={onClick} />
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.IconContainer}>
        <Ionicons
          name={"share-social-outline"}
          size={22}
          color={"#364"}
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
    color: "#36454F",
    fontFamily: "QuicksandMedium",
  },
});
