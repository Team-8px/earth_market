//Follower부분 컴포넌트 입니다.
import React, { useState } from "react";
import styled from "styled-components";
// import EllipseImg from "../../../asset/basic-profile-img-small.svg";
import EllipseImg from "../../../asset/basic-profile-img-small.svg";
import { Button } from "./Button";

const UserListContainer = styled.ul`
  max-width: 390px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const UserListWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const UserImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  font-size: 10px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfoWrapper = styled.div`
  margin-left: 12px;
  width: calc(100% - 118px);
  height: 100%;
  align-self: flex-start;
`;

const UserName = styled.strong`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

const UserIntro = styled.strong`
  color: #767676;
  font-size: 12px;
  line-height: 15px;
`;

function FollwerList({ username, intro }) {
  const [test, setTest] = useState(true);
  return (
    <UserListContainer>
      <UserListWrapper>
        <UserImgWrapper>
          <img src={EllipseImg} alt="프로필 사진" />
        </UserImgWrapper>
        <UserInfoWrapper>
          <UserName>유저네임</UserName>
          <UserIntro>유저인트로</UserIntro>
        </UserInfoWrapper>
        {test ? (
          <Button width="56px" size="sm">
            팔로우
          </Button>
        ) : (
          <Button width="56px" size="sm">
            취소
          </Button>
        )}
      </UserListWrapper>
    </UserListContainer>
  );
}

export default FollwerList;
