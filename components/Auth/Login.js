import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { handleSignIn } from "../../services/firebase/firebaseConfig";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

  const navigation = useNavigation();

  const ToggleVisibilty = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return false;
    } else if (visible.name === "eye-off") {
      return true;
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    await handleSignIn(email, password);
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
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter Password"
            placeholderTextColor="grey"
            returnKeyType="go"
            secureTextEntry={secureTextEntry()}
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
          <Ionicons
            name={visible.name}
            size={24}
            color="#1da"
            style={styles.eyeContainer}
            onPress={ToggleVisibilty}
          />
        </View>
        <Pressable style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontFamily: "QuicksandBold", fontSize: 20 }}>SIGN IN</Text>
        </Pressable>
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            top: "50%",
            height: 30,
          }}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "QuicksandBold",
              fontSize: 16,
              color: "white",
            }}
          >
            Don't have an account? Register
          </Text>
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
    width: "85%",
    height: 60,
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: "QuicksandBold",
    color: "#fff",
  },

  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
  },
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: 20,
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

  forgot: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 18,
  },

  forgotContainer: {
    top: -20,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
