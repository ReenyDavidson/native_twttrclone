import React from "react";
import { StyleSheet, View } from "react-native";
import Onboarding from "../../components/Auth/Onboarding/onboarding";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
