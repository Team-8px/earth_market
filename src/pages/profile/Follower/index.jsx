import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { HeaderFollowList } from "../../../components/Header";
import FollowerList from "../../../components/FollowerList";
import { Button } from "../../../components/Button";
import Navigation from "../../../components/Navigation";

const Follower = () => {
  return (
    <>
      <HeaderFollowList />
      <FolloMainLayOut>
        <FollowerList />
      </FolloMainLayOut>
      <Navigation />
    </>
  );
};

export default Follower;
