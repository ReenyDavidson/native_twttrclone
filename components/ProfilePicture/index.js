import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

const ImageUri = ({ image, size = 50 }) => {
  return (
    <Image source={{ uri: image }} style={{ height: size, width: size, borderRadius: size }} />
  );
};
ImageUri.propTypes = {
  image: PropTypes.string,
  size: PropTypes.number,
};

export default ImageUri;
