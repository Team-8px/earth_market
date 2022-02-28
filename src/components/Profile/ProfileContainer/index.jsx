import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoContainer } from "./index.style";
import { useParams } from "react-router-dom";
import ProfileCard from "../ProfileCard";
import { getUserMyProfile } from "../../../actions/userActions";

function ProfileContainer() {
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userReadProfile);

  useEffect(() => {
    dispatch(getUserMyProfile(accountId));
  }, [dispatch]);

  return (
    <UserInfoContainer>
      <ProfileCard
        image={image}
        username={username}
        accountname={accountname}
        intro={intro}
        followerLink={`/profile/${accountname}/follower`}
        followingLink={`/profile/${accountname}/following`}
        followerCount={followerCount}
        followingCount={followingCount}
      />
    </UserInfoContainer>
  );
}

export default ProfileContainer;
