import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import moment from "moment";

import Footer from "../../Footer";

const RightContainer = ({ tweet }) => {
  return (
    <View style={styles.Maincontainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.Headercontainer}>
          <Text style={styles.nameContainer}>{tweet.user.name}</Text>
          <Text style={styles.usernameContainer}>@{tweet.user.username}</Text>
          <Text style={{ fontSize: 50, color: "gray", fontSize: 17, bottom: 4 }}>.</Text>
          <Text style={styles.createdAtContainer}>{moment(tweet.createdAt).fromNow()}</Text>
        </View>
        <MaterialIcons name={"more-vert"} size={17} color={"lightgray"} />
      </View>
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
    backgroundColor: "#000",
  },
  Headercontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //borderBottomWidth: 2,
  },
  nameContainer: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 17,
  },
  usernameContainer: {
    color: "gray",
    marginHorizontal: 6,
    bottom: 1.5,
    fontSize: 17,
    fontFamily: "QuicksandMedium",
  },
  createdAtContainer: {
    color: "gray",
    marginHorizontal: 3,
    fontSize: 17,
    bottom: 1,
    fontFamily: "QuicksandMedium",
  },
  contentContainer: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 25,
    marginBottom: 10,
    fontFamily: "QuicksandMedium",
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
