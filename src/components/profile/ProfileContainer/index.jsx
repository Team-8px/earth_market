import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoContainer } from "./index.style";
import { useHistory, useParams } from "react-router-dom";
import { getUserMyProfile } from "../../../actions/userActions";
import ProfileCard from "../ProfileCard";

function ProfileContainer() {
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userReadProfile);

  const history = useHistory();
  const MoveAddProduct = () => {
    history.push("/product/upload");
  };

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
        MoveAddProduct={MoveAddProduct}
      />
    </UserInfoContainer>
  );
}

export default ProfileContainer;
