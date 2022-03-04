import React from "react";
import styled from "styled-components";
// import EllipseImg from "../../../asset/Ellipse-1.png";
import EllipseImg from "../../../asset/basic-profile-img-small.svg";

const ChatListContainer = styled.ul`
  width: 100%;
  max-width: 390px;
`;

const ChatItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const UserImgWrapper = styled.div`
  width: 42px;
  height: 42px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const ChatInfoWrapper = styled.strong`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 2px 0 4px 0;

  p {
    max-width: 238px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #767676;
  }
`;

const ChatDate = styled.strong`
  position: absolute;
  right: 0;
  bottom: 3px;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #dbdbdb;
`;

export default function ChatListUser({ username }) {
  return (
    <ChatListContainer>
      <ChatItemContainer>
        <UserImgWrapper>
          <img src={EllipseImg} alt="프로필 사진" />
        </UserImgWrapper>
        <ChatInfoWrapper>
          <strong>유저네임</strong>
          <p>안녕하세요!</p>
        </ChatInfoWrapper>
        <ChatDate>2020.10.25</ChatDate>
      </ChatItemContainer>
    </ChatListContainer>
  );
}
