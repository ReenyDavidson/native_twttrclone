import React, { useEffect } from "react";
import CryptoNews from "../components/News/CryptoNews";

const ApiCall = () => {
  const api = `https://newsapi.org/v2/everything?q=${value}&apiKey=0a2f0af9df9c42eb99cd93e86fe48da0`;

  useEffect(() => {
    const Data = async () => {
      await fetch(api)
        .then((res) => res.json())
        .then((res) => setPost(res.results))
        .catch((e) => console.error(e));
    };

    return Data();
  }, []);

  return <CryptoNews value={value} />;
};

export default ApiCall;
