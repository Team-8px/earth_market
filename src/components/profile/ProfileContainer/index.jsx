import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoContainer } from "./index.style";
import { useHistory } from "react-router-dom";
import { getUserMyProfile } from "../../../actions/userActions";
//import useWhichUserAccountName from "../../../hooks/useWhichUserAccountName";
import {
  getWhichUserStatus,
  getWhichUserAccountName,
} from "../../../util/getWhichUser";

import ProfileCard from "../ProfileCard";

function ProfileContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userReadProfile);

  const MoveAddProduct = () => {
    history.push("/product/upload");
  };

  useEffect(() => {
    const account = getWhichUserAccountName();
    dispatch(getUserMyProfile(account));
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
        MoveAddProduct={MoveAddProduct}
      />
    </UserInfoContainer>
  );
}

export default ProfileContainer;
