import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
// "#00d2ff",

const OnboardingFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("SignInScreen");
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            fontFamily: "QuicksandBold",
          }}
        >
          LOGIN
        </Text>
      </Pressable>
      <Pressable
        style={styles.regButton}
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <Text
          style={{
            color: "#fff",

            fontSize: 16,
            fontFamily: "QuicksandBold",
          }}
        >
          REGISTER
        </Text>
      </Pressable>
    </View>
  );
};

export default OnboardingFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },
  loginButton: {
    backgroundColor: "#1da",
    borderRadius: 10,
    borderTopRightRadius: 5,
    padding: 10,
    margin: 10,
    width: "35%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  regButton: {
    borderColor: "#1da",
    borderWidth: 2,
    borderRadius: 10,
    borderBottomLeftRadius: 5,
    padding: 10,
    margin: 10,
    width: "35%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
