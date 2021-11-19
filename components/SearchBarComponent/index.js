import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <TextInput style={styles.Input} placeholder="Search Twitter" placeholderTextColor={"grey"} />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#282C35",
    padding: 5,
    borderRadius: 20,
    width: 270,
    fontSize: 17,
    fontFamily: "QuicksandMedium",
    paddingHorizontal: 15,
  },
});
