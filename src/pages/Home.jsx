import React from "react";
import Navbar from "../components/common/Navbar";
import HomeHeader from "../components/header/HomeHeader";
import HomeContainer from "../components/home/HomeContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <HomeContainer />
    </>
  );
};

export default Home;
