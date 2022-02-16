//프로필 컴포넌트입니다.
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProfileImage } from "./common/image/ProfileImageStyle";
// import { Button } from "./module/button/button";

const UserInfo = ({
  username,
  accountname,
  intro,
  followerCount,
  followingCount,
  profileImage,
}) => {
  return (
    <UserInfoContainer>
      <UserInfoWrapper>
        <ProfileImage>
          <img src={profileImage} alt="프로필 사진" />
        </ProfileImage>
        <UserName>{username}</UserName>
        <AccountName>{accountname}</AccountName>
        <Intro>{intro}</Intro>
        <FollowerWrapper to={`/profile/${accountname}/follower`}>
          <strong>{followerCount}</strong>
          <span>followers</span>
        </FollowerWrapper>
        <FollowingWrapper to={`/profile/${accountname}/following`}>
          <strong>{followingCount}</strong>
          <span>following</span>
        </FollowingWrapper>
        {/* <Button size="md" width="120px">
          팔로우
        </Button>
        <Button size="md" width="120px">
          언팔로우
        </Button>
        <Button size="md" width="120px">
          프로필 수정
        </Button>
        <Button size="md" width="120px">
          상품 등록
        </Button> */}
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid;
  background-color: #fff;
  margin-bottom: 6px;
`;
const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 16px 26px;

  img {
    margin-bottom: 16px;
  }
`;
const UserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`;
const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  margin-bottom: 16px;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;
const Intro = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
  margin-bottom: 24px;
`;
const FollowerWrapper = styled(Link)`
  position: absolute;
  left: 56px;
  top: 65px;
  text-align: center;
  cursor: pointer;

  strong {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 6px;
  }

  span {
    font-size: 10px;
    color: #767676;
  }
`;

const FollowingWrapper = styled(Link)`
  position: absolute;
  left: 287px;
  top: 65px;
  text-align: center;
  cursor: pointer;

  strong {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 6px;
  }

  span {
    font-size: 10px;
    color: #767676;
  }
`;

export default UserInfo;
