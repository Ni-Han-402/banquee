import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import Notifications from "../components/Notifications";
import Savings from "../components/Savings";
import Tools from "../components/Tools";
import Transiction from "../components/Transiction";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Features></Features>
      <Transiction></Transiction>
      <Savings></Savings>
      <Notifications></Notifications>
      <Tools></Tools>
      <Footer></Footer>
    </div>
  );
};

export default Home;
