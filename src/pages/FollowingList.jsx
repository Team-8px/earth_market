import React from "react";
import FollowHeader from "../components/header/FollowHeader";
import FollowingContainer from "../components/follow/FollowingContainer";
import Navbar from "../components/common/Navbar";

const FollowingList = () => {
  return (
    <>
      <Navbar />
      <FollowHeader following />
      <FollowingContainer />
    </>
  );
};
export default FollowingList;
