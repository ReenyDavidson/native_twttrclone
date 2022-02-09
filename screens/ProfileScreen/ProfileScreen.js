import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { handleSignout } from "../../services/firebase/firebaseConfig";
import ImageUri from "../../components/ProfilePicture";
import firebase from "firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageUri
        size={25}
        image={"https://i.pinimg.com/736x/3f/97/3a/3f973a4cb980751c809b682042ca3aff.jpg"}
      />
      <Text
        style={{
          fontSize: 20,
          fontFamily: "QuicksandMedium",
          color: "#FFF",
        }}
      >
        {firebase.auth().currentUser.email}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          handleSignout();
          navigation.navigate("SignInScreen");
        }}
      >
        <Text
          style={{
            fontFamily: "QuicksandBold",
            fontSize: 20,
            color: "#FFF",
          }}
        >
          sign out
        </Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C1C",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: 25,
    backgroundColor: "#11DDAA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 55,
    width: 55,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 13 },
  },
});
