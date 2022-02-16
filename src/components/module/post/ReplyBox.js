import React, { useState } from "react";
import styled from "styled-components";
import EllipseImg from "../../../asset/Ellipse-1.png";
import MoreButton from "../../../asset/icon/icon-more-vertical.png";
const CommentLayout = styled.section`
  width: 100%;
  padding: 20px 16px 0;
  box-sizing: border-box;
  border-top: 1px solid #dbdbdb;
`;

const CommentContainer = styled.ul`
  max-width: 390px;
  margin: 0 auto;
  list-style: none;
`;
const CommonetList = styled.li`
  margin-bottom: 16px;
  position: relative;
`;

const CommentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;

  img {
    margin-right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
  }

  strong {
    margin: 6px 6px 0 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  span {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    color: #767676;
    margin-top: 8.5px;
    &::before {
      content: "·";
      margin-right: 4px;
    }
  }
`;

const CommentText = styled.p`
  padding-left: 48px;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

const CommentBox = styled.button`
    content: "";
    position: absolute;
    top : 10px;
    right: 0px;
    width: 20px;
    height: 20px;
    background-image: url(${MoreButton});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export function CommentList({ children }) {
  return (
    <CommentLayout>
      <CommentContainer>{children}</CommentContainer>
    </CommentLayout>
  );
}

export function ReplyBox({ img, username, time, comment, alt }) {
  return (
    <CommonetList>
      <CommentWrapper>
        <img src={img || EllipseImg} alt={alt} />
        <strong>{username}</strong>
        <span>{time}</span>
      </CommentWrapper>
      <CommentText>{comment}</CommentText>
      <CommentBox></CommentBox>
    </CommonetList>
  );
}
