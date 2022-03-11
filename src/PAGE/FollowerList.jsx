import React from "react";
import FollowHeader from "../components/header/FollowHeader";
import FollowerContainer from "../components/follow/FollowerContainer";
import Navbar from "../components/common/Navbar";

const FollowerList = () => {
  return (
    <>
      <FollowHeader />
      <FollowerContainer />
      <Navbar />
    </>
  );
};

export default FollowerList;
