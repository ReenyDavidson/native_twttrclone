import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "../../components/Auth/SignUp";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
