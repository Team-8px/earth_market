import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  BtnLink,
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
          <BtnLink to="/profile/myself/update">
            <ProfileBtn>프로필수정</ProfileBtn>
          </BtnLink>
          <BtnLink as={"div"} onClick={() => MoveAddProduct()}>
            <ProfileBtn>상품추가</ProfileBtn>
          </BtnLink>
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
