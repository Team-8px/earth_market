import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { HeaderFollowList } from "../../../components/Header";
import FollowerList from "../../../components/FollowerList";

const Follower = () => {
  return (
    <FolloMainLayOut>
      <HeaderFollowList />
        <FollowerList />
    </FolloMainLayOut>
  );
};

export default Follower;
