import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

const NewsHeaderImage = ({ image, height, width, borderRadius }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ height: height, width: width, borderRadius: borderRadius }}
    />
  );
};
NewsHeaderImage.propTypes = {
  image: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  borderRadius: PropTypes.number,
};

export default NewsHeaderImage;
