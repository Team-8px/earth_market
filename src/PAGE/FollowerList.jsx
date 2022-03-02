import React, { useEffect } from "react";
import { HeaderFollow } from "../components/template/common/Header";
import FollowerContainer from "../components/Profile작업/FollowerContainer";
import Navigation from "../components/template/common/Navigation";

const FollowerList = () => {
  return (
    <>
      <HeaderFollow />
      <FollowerContainer />
      <Navigation />
    </>
  );
};

export default FollowerList;
