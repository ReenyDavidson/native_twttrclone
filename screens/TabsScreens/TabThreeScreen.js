import React from "react";
import { View, Text, Image } from "react-native";

export default function TabThreeScreen() {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",

        backgroundColor: "#0C0C1C",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/images/notifications-bro.png")}
        style={{
          width: 300,
          height: 300,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
        }}
      />
      <Text
        style={{
          color: "#C0C0C0",
          fontSize: 20,
          fontFamily: "QuicksandSemiBold",
          textAlign: "center",
          marginTop: 10,
          width: 400,

          lineHeight: 30,
        }}
      >
        No New Notification
      </Text>
    </View>
  );
}
