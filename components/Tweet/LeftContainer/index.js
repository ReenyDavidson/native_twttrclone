import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageUri from "../../ProfilePicture/index";
import moment from "moment";

const LeftContainer = ({ tweet }) => {
  return (
    <View style={styles.Headercontainer}>
      <ImageUri image={tweet.user.image} size={55} radius={10} />
      <View
        style={{
          flexDirection: "row",
          marginVertical: 5,
          marginHorizontal: 14,
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.nameContainer}>{tweet.user.name}</Text>
          <Text style={styles.usernameContainer}>@{tweet.user.username}</Text>
        </View>
        <Text style={styles.createdAtContainer}>{moment(tweet.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default LeftContainer;

const styles = StyleSheet.create({
  Headercontainer: {
    flexDirection: "row",
    marginLeft: 14,
    paddingBottom: 20,

    //borderBottomWidth: 2,
  },
  nameContainer: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 17,
  },
  usernameContainer: {
    color: "gray",
    bottom: 1.5,
    fontSize: 17,
    fontFamily: "QuicksandMedium",
  },
  createdAtContainer: {
    color: "gray",
    marginHorizontal: 3,
    fontSize: 14,
    bottom: 1,
    fontFamily: "QuicksandMedium",
  },
});
