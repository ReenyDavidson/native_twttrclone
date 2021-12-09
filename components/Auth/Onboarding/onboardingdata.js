import React from "react";
import { ActivityIndicatorBase, Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { back } from "react-native/Libraries/Animated/src/Easing";

export default function Onboardingdata() {
  const onboardingdata = [
    {
      id: "1",
      description: "Connect with people who share your interests and passions.",
      image: require("../../../assets/images/interaction-bro.png"),
    },
    {
      id: "2",
      description: "Get news, updates, and information about the things you care about.",
      image: require("../../../assets/images/Search-bro.png"),
    },
    {
      id: "3",
      description: "Find out what's happening in your community.",
      image: require("../../../assets/images/handshake-bro.png"),
    },
  ];

  return (
    <FlatList
      data={onboardingdata}
      centerContent={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    marginVertical: 10,
    padding: 10,
    height: "80%",
    backgroundColor: "#0C0C1C",
  },
  image: {
    width: 300,
    height: 300,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 20,
    fontFamily: "QuicksandSemiBold",
    textAlign: "center",
    marginTop: 10,
    width: 400,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    color: "#C0C0C0",
    lineHeight: 30,
  },
  textContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
