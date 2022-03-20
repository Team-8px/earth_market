import React from "react";
import FollowHeader from "../components/header/FollowHeader";
import FollowerContainer from "../components/follow/FollowerContainer";
import Navbar from "../components/common/Navbar";

const FollowerList = () => {
  return (
    <>
      <Navbar />
      <FollowHeader />
      <FollowerContainer />
    </>
  );
};

export default FollowerList;
