import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "../../components/Auth/Login";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
