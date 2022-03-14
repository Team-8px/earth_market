import styled from "styled-components";
import heart from "../../../asset/icon/icon-heart.svg";
import heartActive from "../../../asset/icon/icon-heart-active.svg";
import comment from "../../../asset/icon/icon-message-circle.svg";

export const LayOut = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
`;

export const ActiveLikeButton = styled.button`
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
    background: url(${heartActive}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;

export const NotActiveLikeButton = styled.button`
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

export const LikeCount = styled.span``;

export const CommentButton = styled.a`
  display: flex;
  align-items: center;
  color: #767676;

  &::before {
    cursor: pointer;
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${comment}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;

export const CommentCount = styled.span``;
