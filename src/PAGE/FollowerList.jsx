import React from "react";
import FollowHeader from "../components/header/FollowHeader";
import Navigation from "../components/template/common/Navigation";
import FollowerContainer from "../components/follow/FollowerContainer";

const FollowerList = () => {
  return (
    <>
      <FollowHeader />
      <FollowerContainer />
      <Navigation />
    </>
  );
};

export default FollowerList;
