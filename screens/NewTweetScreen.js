import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import ImageUri from "../components/ProfilePicture";

const NewTweetScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <IonIcons name={"close"} size={30} color={"#282C35"} />
        <Pressable style={styles.Button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </Pressable>
      </View>
      <View style={styles.newTweetInputContainer}>
        <ImageUri
          image={
            "https://www.washingtonpost.com/resizer/PWa0TPTXiZtSD3v-fDE8OXp0eUA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4WH6CDER5II6PB2U2R4GRDJDWQ.png"
          }
          size={50}
        />
        <View style={styles.InputsContainer}>
          <TextInput
            style={styles.tweetInput}
            placeholder={"What's happening?"}
            placeholderTextColor={"#36454F"}
            multiline={true}
            numberOfLines={7}
            textAlignVertical={"top"}
          />
          <TextInput style={styles.imageUpload} placeholder={"Image uri"} />
        </View>
      </View>
    </View>
  );
};

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#1DA1F2",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    paddingVertical: 7,
    paddingHorizontal: 19,
    color: "#FFF",
    fontFamily: "QuicksandBold",
  },
  newTweetInputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  InputsContainer: {
    top: 10,
    marginLeft: 10,
    height: 200,
  },
  tweetInput: {
    flex: 1,
    fontFamily: "QuicksandSemiBold",
    fontSize: 20,
    height: "200%",
    width: 300,
  },
  imageUpload: {},
});
