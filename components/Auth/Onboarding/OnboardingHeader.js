import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const OnboardingHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Brox.</Text>
    </View>
  );
};

export default OnboardingHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    top: 50,

    borderBottomColor: "#00e0ff",
    borderBottomWidth: 2,
    height: 200,
  },
  text: {
    fontSize: 50,
    color: "#1da",
    letterSpacing: 0,
    fontFamily: "QuicksandBold",
    transform: [{ rotate: "-5deg" }],
  },
});
