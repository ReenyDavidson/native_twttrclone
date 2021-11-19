import React from "react";
import { View } from "react-native";
import ImageUri from "../../ProfilePicture/index";

const LeftContainer = ({ user }) => {
  return (
    <View>
      <ImageUri image={user.image} size={55} />
    </View>
  );
};

export default LeftContainer;
