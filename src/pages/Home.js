import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Navber from "../components/Navber";
import Transiction from "../components/Transiction";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Features></Features>
      <Transiction></Transiction>
    </div>
  );
};

export default Home;
