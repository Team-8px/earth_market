import React from "react";
import { UserInfoContainer } from "./index.style";
import ProfileCard from "../ProfileCard";

function ProfileContainer() {
  return (
    <UserInfoContainer>
      <ProfileCard />
    </UserInfoContainer>
  );
}

export default ProfileContainer;
