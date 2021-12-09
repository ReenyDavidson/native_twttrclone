import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import Footer from "../../Footer";

const RightContainer = ({ data }) => {
  return (
    <View style={styles.Maincontainer}>
      <View>
        <Text style={styles.contentContainer}>{data.text}</Text>
        {!!data.image && <Image source={{ uri: data.image }} style={styles.contentImage} />}
      </View>
    </View>
  );
};

export default RightContainer;

const styles = StyleSheet.create({
  Maincontainer: {
    marginLeft: 14,
    flex: 1,
    backgroundColor: "#0C0C1C",
  },
  contentContainer: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 25,
    paddingBottom: 20,
    fontFamily: "QuicksandSemiBold",
    color: "#fff",
    height: "auto",
  },
  contentImage: {
    width: "95%",
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
