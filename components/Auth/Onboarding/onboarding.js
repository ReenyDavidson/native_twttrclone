import React from "react";
import { StyleSheet, View } from "react-native";
import Onboardingdata from "./onboardingdata";
import OnboardingFooter from "./OnboardingFooter";
import OnboardingHeader from "./OnboardingHeader";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <OnboardingHeader />
      <Onboardingdata />
      <OnboardingFooter />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#0C0C1C",
    alignItems: "center",
    justifyContent: "center",
  },
});
