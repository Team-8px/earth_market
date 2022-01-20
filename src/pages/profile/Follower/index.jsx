import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { HeaderFollowList } from "../../../components/Header";
import { UserListContainer } from "./index.style";

const Follower = () => {
  return (
    <FolloMainLayOut>
      <HeaderFollowList />
      <UserListContainer></UserListContainer>
    </FolloMainLayOut>
  );
};

export default Follower;
