import React from "react";
import { View, Text, Image } from "react-native";

export default function TabThreeScreen() {
  return (
    <View>
      <Image
        source={require("../../assets/images/notifications-bro.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <Text>No New Notification</Text>
    </View>
  );
}
