import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoContainer } from "./index.style";
import { useHistory } from "react-router-dom";
import { getUserProfile } from "../../../actions/userActions";
import { getWhichUserAccountName } from "../../../util/getWhichUser";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
import ProfileCard from "../ProfileCard";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    image,
    username,
    accountname,
    intro,
    followerCount,
    followingCount,
    isfollow,
  } = useSelector(state => state.userReadProfile);

  const MoveAddProduct = () => {
    history.push("/product/upload");
  };

  const accountnameFromParams = getWhichUserAccountName();

  useEffect(() => {
    dispatch(getUserProfile(accountnameFromParams));
  }, [dispatch, accountnameFromParams]);

  return (
    <UserInfoContainer>
      <h3 className="a11y-hidden">프로필</h3>
      <ProfileCard
        image={changeDefaltImage(image)}
        username={username}
        accountname={accountname}
        intro={intro}
        followerLink={`/profile/${accountname}/follower`}
        followingLink={`/profile/${accountname}/following`}
        followerCount={followerCount}
        followingCount={followingCount}
        MoveAddProduct={MoveAddProduct}
        isfollow={isfollow}
      />
    </UserInfoContainer>
  );
};

export default ProfileContainer;
