import React from "react";
import { getWhichUserStatus } from "../../../util/getWhichUser";
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
  ProfileEditBtn,
  AddProductBtn,
  FollowBtn,
} from "./index.style";

function ProfileCard({
  image,
  username,
  accountname,
  intro,
  followerLink,
  followingLink,
  followerCount,
  followingCount,
  MoveAddProduct,
}) {
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
          <BtnLink to={`/${accountname}/edit`}>
            <ProfileEditBtn>프로필수정</ProfileEditBtn>
          </BtnLink>
          <BtnLink as={"div"} onClick={() => MoveAddProduct()}>
            <AddProductBtn>상품추가</AddProductBtn>
          </BtnLink>
        </UserInfoButtonsWrapper>
      ) : (
        <UserInfoButtonsWrapper>
          <BtnLink to={`/to`}>
            <FollowBtn>팔로우</FollowBtn>
          </BtnLink>
        </UserInfoButtonsWrapper>
      )}
    </UserInfoWrapper>
  );
}

export default ProfileCard;
