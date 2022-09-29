import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Navber from "../components/Navber";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
};

export default Home;
