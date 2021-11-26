import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 40, fontFamily: "QuicksandBold", color: "#fff" }}>
          Create an account
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.email}
          defaultValue={email}
          onChangeText={handleEmailChange}
          textContentType="emailAddress"
          placeholder="Email Address"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.password}
          defaultValue={password}
          onchangeText={handlePasswordChange}
          placeholder="Enter Password"
          placeholderTextColor="grey"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
          keyboardType="default"
          autoCorrect={false}
        />
        <Pressable style={styles.registerContainer}>
          <Text style={styles.register}>Sign In?</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={{ fontFamily: "QuicksandBold", fontSize: 20 }}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#0C0C1C",
  },
  headerContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
    height: 50,
    marginBottom: 40,
    top: -100,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: -70,
  },
  email: {
    width: "80%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: "QuicksandBold",
  },
  password: {
    width: "80%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
    fontFamily: "QuicksandBold",
    color: "#fff",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#1da",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    padding: 10,
  },
  register: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 18,
  },
  registerContainer: {
    width: "80%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
