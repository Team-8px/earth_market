import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { HeaderFollowList } from "../../../components/Header";
import FollowerList from "../../../components/FollowerList";
import { Button } from "../../../components/Button";

const Follower = () => {
  return (
    <FolloMainLayOut>
      <HeaderFollowList />
        <FollowerList />
          <Button size="sm" width="56px">
            팔로우
          </Button>
          {/* <Button size="sm" width="56px">
            취소
          </Button> */}
    </FolloMainLayOut>
  );
};

export default Follower;
