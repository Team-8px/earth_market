import React, { useEffect } from "react";
// 스타일 로직
import { HeaderFollow } from "../components/template/common/Header";
import FollowingContainer from "../components/follow/FollowingContainer";
import Navigation from "../components/template/common/Navigation";

const FollowingList = () => {
  return (
    <>
      <HeaderFollow following />
      <FollowingContainer />
      <Navigation />
    </>
  );
};
export default FollowingList;
