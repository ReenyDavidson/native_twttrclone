import PropTypes from "prop-types";

UserType.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

TweetType.propTypes = {
  id: PropTypes.string,
  createdAt: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  numberOfComments: PropTypes.string,
  numberOfRetweets: PropTypes.string,
  numberOfLikes: PropTypes.string,
};
