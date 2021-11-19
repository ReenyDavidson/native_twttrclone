import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    QuicksandBold: require("./assets/fonts/Quicksand/static/Quicksand-Bold.ttf"),
    QuicksandMedium: require("./assets/fonts/Quicksand/static/Quicksand-Medium.ttf"),
    QuicksandSemiBold: require("./assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf"),
    Klee: require("./assets/fonts/Klee_One/KleeOne-Regular.ttf"),
    poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar barStyle={"light-content"} animated={true} backgroundColor={"#000"} />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
