import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { handleSignUp } from "../../services/firebase/firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSignUpPress = async () => {
    if (email == "" && password !== confirmPassword && password == "" && confirmPassword == "") {
      console.error("Invalid Credentials");
    } else {
      try {
        await handleSignUp(email, password);
        navigation.navigate("SignInScreen");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 40, fontFamily: "QuicksandBold", color: "#fff" }}>Create</Text>
        <Image
          source={require("../../assets/images/broxnbg.png")}
          style={{
            height: 30,
            width: 50,
            top: 9,
            marginRight: 5,
            transform: [{ rotate: "-10deg" }],
          }}
        />
        <Text style={{ fontSize: 40, fontFamily: "QuicksandBold", color: "#fff" }}>account</Text>
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
          secureTextEntry={true}
          textContentType="password"
          keyboardType="default"
          autoCorrect={false}
        />
        <TextInput
          style={styles.password}
          defaultValue={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          returnKeyType="go"
          secureTextEntry={true}
          textContentType="password"
          keyboardType="default"
          autoCorrect={false}
        />
        <Pressable
          style={styles.registerContainer}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text style={styles.register}>want to sign in?</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSignUpPress}>
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
    flexDirection: "row",
    width: "80%",
    height: 50,
    marginBottom: 40,
    top: -20,
  },
  form: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: -40,
  },
  email: {
    width: "100%",
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
    width: "100%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: "QuicksandBold",
    color: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1da",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    padding: 10,
  },
  register: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 18,
  },
  registerContainer: {
    top: -30,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
