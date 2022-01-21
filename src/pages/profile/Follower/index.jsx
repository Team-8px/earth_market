import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { HeaderFollowList } from "../../../components/Header";
import { UserListContainer, UserListWrapper, UserInfoWrapper } from "./index.style";

const Follower = () => {
  return (
    <FolloMainLayOut>
      <HeaderFollowList />
      <UserListContainer>
        <UserListWrapper></UserListWrapper>
        <UserInfoWrapper></UserInfoWrapper>
      </UserListContainer>
    </FolloMainLayOut>
  );
};

export default Follower;
