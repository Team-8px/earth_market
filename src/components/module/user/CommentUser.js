import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../../asset/icon/basic-profile.svg";

const CommentLayOut = styled.section`
  position: fixed;
  width: 0 auto;
  left: 0;
  bottom: 0;
  min-width: 390px;
  width: 100%;
  padding: 12px 0;
  border-style: none;
  border-top: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

const CommentContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
`;

const ProfileLinkImg = styled.img`
  width: 36px;
  cursor: pointer;
`;

const CommentLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 1px;
  color: transparent;
`;

const CommentInput = styled.input`
  display: block;
  border-style: none;
  margin-left: 16px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const CommentButton = styled.button`
  width: 30px;
  border-style: none;
  margin-right: 4px;
  color: #c4c4c4;
  &:focus {
    color: #f26e22;
  }
`;

const Comment = props => (
  <CommentLayOut>
    <CommentContainer>{props.children}</CommentContainer>
  </CommentLayOut>
);

export function CommentUser({ buttonText }) {
  return (
    <Comment>
      <ProfileLinkImg src={ProfileIcon} alt="프로필" />
      <CommentLabel>
        댓글 입력하기
        <CommentInput type="text" placeholder="댓글 입력하기..." />
      </CommentLabel>
      <CommentButton>{buttonText}</CommentButton>
    </Comment>
  );
}
