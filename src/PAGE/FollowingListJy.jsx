import React from "react";
// 스타일 로직
import { HeaderFollow } from "../components/template/common/Header";
import Navigation from "../components/template/common/Navigation";
import FollowingContainer from "../components/Profile작업/FollowingContainer";

const FollowingListJy = () => {
  return (
    <>
      <HeaderFollow following />
      <FollowingContainer />
      <Navigation />
    </>
  );
};

export default FollowingListJy;
