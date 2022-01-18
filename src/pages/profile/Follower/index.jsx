import React from "react";
import { FolloMainLayOut } from "../../../components/MainLayOut";
import { UserListContainer } from "./index.style";

const Follower = () => {
  return (
    <FolloMainLayOut>
      <UserListContainer></UserListContainer>
    </FolloMainLayOut>
  );
};

export default Follower;
