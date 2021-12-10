import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const NewTweetButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("NewTweetScreen");
  };
  return (
    <Pressable style={styles.button}>
      <AntDesign name={"plus"} size={25} color={"#0C0C1C"} onPress={onPress} />
    </Pressable>
  );
};

export default NewTweetButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 25,
    right: 20,
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
