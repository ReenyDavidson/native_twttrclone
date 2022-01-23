import React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import ImageUri from "../ProfilePicture";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";

export default function NewTweet() {
  const [image, setImage] = React.useState(null);
  const [text, setText] = React.useState("");

  const navigation = useNavigation();

  const handleTextChange = (text) => {
    setText(text);
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
    if (status === "granted") {
      const pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 4],
      });
      setImage(pickerResult.uri);
    }
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [8, 8],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    firebase
      .firestore()
      .collection("posts")
      .add({
        text,
        image,
        likes: 0,
        createdAt: new Date(),
        user: {
          email: firebase.auth().currentUser.email,
        },
      })
      .then(() => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .update({
            posts: firebase.firestore.FieldValue.increment(1),
          });
      });

    setText("");
    setImage(null);
    navigation.navigate("TabOneScreen");
  };

  return (
    <View style={styles.container}>
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
            placeholder={"What's up?!"}
            defaultValue={text}
            placeholderTextColor={"grey"}
            multiline={true}
            numberOfLines={7}
            autoFocus={true}
            onChangeText={handleTextChange}
            textAlignVertical={"top"}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageButton}>
          <IonIcons name={"camera-outline"} size={30} color={"#FFF"} onPress={handleTakePhoto} />
          <IonIcons name={"image-outline"} size={30} color={"#FFF"} onPress={handleImagePicker} />
        </View>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.headerContainer}>
        <Pressable style={styles.Button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Make a post</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
    justifyContent: "flex-start",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#11DDAA",
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
    padding: 10,
    fontSize: 20,
    height: "200%",
    width: 300,
    color: "#FFF",
    backgroundColor: "#282C35",
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#282C35",
  },
  imageButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 30,
    borderRadius: 10,
  },
  image: {
    width: "45%",
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
