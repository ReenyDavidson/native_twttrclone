import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { handleSignIn } from "../../services/firebase/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignInClick = () => {
    handleSignIn(email, password);
    console.log("Login successful");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "QuicksandBold",
            color: "#fff",
          }}
        >
          Sign in
        </Text>
        <Image
          source={require("../../assets/images/broxnbg.png")}
          style={{ height: 30, width: 50, top: 9, transform: [{ rotate: "-10deg" }] }}
        />
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
          onChangeText={handlePasswordChange}
          placeholder="Enter Password"
          placeholderTextColor="grey"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
          keyboardType="default"
          autoCorrect={false}
        />
        <Pressable style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSignInClick}>
          <Text style={{ fontFamily: "QuicksandBold", fontSize: 20 }}>SIGN IN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

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
    flexDirection: "row",
    width: "80%",
    height: 50,
    marginBottom: 40,
    top: -70,
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
    color: "#fff",
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

  forgot: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 18,
  },
  forgotContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
