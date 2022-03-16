import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getWhichUserStatus } from "../../../util/getWhichUser";
import { followUser, unfollowUser } from "../../../actions/followAction";
import basicImg from "../../../asset/basic-profile-img.svg";

import {
  UserInfoWrapper,
  UserInfoImg,
  UserInfoName,
  UserInfoId,
  UserInfoIntro,
  FollowerLink,
  FollowingLink,
  FollowCount,
  FollowText,
  UserInfoButtonsWrapper,
  ProfileBtn,
  FollowBtn,
  CancelBtn,
} from "./index.style";

const ProfileCard = ({
  image,
  username,
  accountname,
  intro,
  followerLink,
  followingLink,
  followerCount,
  followingCount,
  MoveAddProduct,
  isfollow,
}) => {
  const [isFollow, setIsFollow] = useState(isfollow && isfollow);

  const dispatch = useDispatch();

  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
    setIsFollow(false);
  };

  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
    setIsFollow(true);
  };

  const trigger = e => {
    e.target.src = basicImg;
  };

  const history = useHistory();

  return (
    <UserInfoWrapper>
      <UserInfoImg
        alt="프로필 이미지"
        src={image || basicImg}
        onError={e => {
          trigger(e);
        }}
      />
      <UserInfoName>{username}</UserInfoName>
      <UserInfoId>{accountname}</UserInfoId>
      <UserInfoIntro>{intro}</UserInfoIntro>
      <FollowerLink to={followerLink}>
        <FollowCount>{followerCount}</FollowCount>
        <FollowText>follower</FollowText>
      </FollowerLink>
      <FollowingLink to={followingLink}>
        <FollowCount>{followingCount}</FollowCount>
        <FollowText>following</FollowText>
      </FollowingLink>
      {getWhichUserStatus() === "my" ? (
        <UserInfoButtonsWrapper>
          <ProfileBtn onClick={() => {
            history.push("/profile/myself/update");
          }}>프로필 수정</ProfileBtn>
          <ProfileBtn onClick={() => MoveAddProduct()}>상품추가</ProfileBtn>
        </UserInfoButtonsWrapper>
      ) : (
        <UserInfoButtonsWrapper>
          {isFollow ? (
            <CancelBtn onClick={() => onUnfollowClick(accountname)}>
              취소
            </CancelBtn>
          ) : (
            <FollowBtn onClick={() => onFollowClick(accountname)}>
              팔로우
            </FollowBtn>
          )}
        </UserInfoButtonsWrapper>
      )}
    </UserInfoWrapper>
  );
};

export default ProfileCard;
