import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  return <TextInput style={styles.Input} placeholder="Search News" placeholderTextColor={"#fff"} />;
};

export default SearchBar;

const styles = StyleSheet.create({
  Input: {
    backgroundColor: "#001",
    padding: 5,
    borderRadius: 5,
    width: 270,
    fontSize: 17,
    fontFamily: "QuicksandMedium",
    paddingHorizontal: 15,
  },
});
