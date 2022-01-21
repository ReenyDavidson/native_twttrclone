import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageUri from "../../ProfilePicture/index";
import moment from "moment";
import firebase from "firebase";

const LeftContainer = () => {
  return (
    <View style={styles.Headercontainer}>
      <ImageUri
        image={"https://i.pinimg.com/736x/3f/97/3a/3f973a4cb980751c809b682042ca3aff.jpg"}
        size={55}
        radius={10}
      />
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
          <Text style={styles.nameContainer}>name</Text>
          <Text style={styles.usernameContainer}>
            @
            {firebase
              .auth()
              .currentUser.email.substring(0, firebase.auth().currentUser.email.lastIndexOf("@"))}
          </Text>
        </View>
        <Text style={styles.createdAtContainer}>2pm</Text>
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
