import React from "react";
import FollowHeader from "../components/header/FollowHeader";
import FollowingContainer from "../components/follow/FollowingContainer";
import Navigation from "../components/template/common/Navigation";

const FollowingList = () => {
  return (
    <>
      <FollowHeader following />
      <FollowingContainer />
      <Navigation />
    </>
  );
};
export default FollowingList;
