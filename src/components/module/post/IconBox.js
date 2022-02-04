import React from "react";
import styled from "styled-components";
import heart from "../../../asset/icon/icon-heart.svg";
import comment from "../../../asset/icon/icon-message-circle.svg";

const LayOut = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  color: #767676;
  margin-right: 18px;
  background-color: inherit;
  padding: 0;

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${heart}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;

const LikeCount = styled.span``;

const CommentButton = styled.a`
  display: flex;
  align-items: center;
  color: #767676;

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${comment}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;
const CommentCount = styled.span``;

export default function IconBox({ like, comment }) {
  return (
    <LayOut>
      <LikeButton>
        <LikeCount>{like}</LikeCount>
      </LikeButton>
      <CommentButton>
        <CommentCount>{comment}</CommentCount>
      </CommentButton>
    </LayOut>
  );
}
