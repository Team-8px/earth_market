import React from "react";
import basicImg from "../../../asset/basic-profile-img.png";
import testImg from "../../../asset/8px.png";
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
} from "./index.style";

function ProfileCard() {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <UserInfoWrapper>
      <UserInfoImg
        alt="프로필 이미지"
        src={"testImg" || basicImg}
        onError={e => {
          trigger(e);
        }}
      />
      <UserInfoName>post.userName</UserInfoName>
      <UserInfoId>post.userName</UserInfoId>
      <UserInfoIntro>post.intro</UserInfoIntro>
      <FollowerLink to="/">
        <FollowCount>10</FollowCount>
        <FollowText>FollowText</FollowText>
      </FollowerLink>
      <FollowingLink to="/">
        <FollowCount>10</FollowCount>
        <FollowText>FollowText</FollowText>
      </FollowingLink>
      <UserInfoButtonsWrapper>
        <BtnLink to="/">
          <ProfileEditBtn>프로필수정</ProfileEditBtn>
        </BtnLink>
        <BtnLink to="/">
          <AddProductBtn>상품추가</AddProductBtn>
        </BtnLink>
      </UserInfoButtonsWrapper>
    </UserInfoWrapper>
  );
}

export default ProfileCard;
