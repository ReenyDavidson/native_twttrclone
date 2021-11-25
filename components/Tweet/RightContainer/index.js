import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import Footer from "../../Footer";

const RightContainer = ({ tweet }) => {
  return (
    <View style={styles.Maincontainer}>
      <View>
        <Text style={styles.contentContainer}>{tweet.content}</Text>
        {!!tweet.image && <Image source={{ uri: tweet.image }} style={styles.contentImage} />}
      </View>
      <Footer tweet={tweet} />
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
  },
  contentImage: {
    width: "95%",
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
