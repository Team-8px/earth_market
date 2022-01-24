import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { HeaderFollowList } from "../../../components/Header";
import {
  UserListContainer,
  UserListWrapper,
  UserInfoWrapper,
} from "./index.style";
import { Button } from "../../../components/Button";

const Follower = () => {
  return (
    <FolloMainLayOut>
      <HeaderFollowList />
      <UserListContainer>
        <UserListWrapper>
          <UserInfoWrapper></UserInfoWrapper>
          <Button size="sm" width="56px">
            팔로우
          </Button>
          {/* <Button size="sm" width="56px">
            취소
          </Button> */}
        </UserListWrapper>
      </UserListContainer>
    </FolloMainLayOut>
  );
};

export default Follower;
