import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { likePost, unLikePost, getPost } from "../../../actions/postActions";
import heart from "../../../asset/icon/icon-heart.svg";
import heartActive from "../../../asset/icon/icon-heart-active.png";
import comment from "../../../asset/icon/icon-message-circle.svg";

const LayOut = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
`;

const ActiveLikeButton = styled.button`
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

const NotActiveLikeButton = styled.button`
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

export default function IconBox({ like, comment, postId }) {
  const [isLikeAction, setIsLikeAction] = useState();

  const dispatch = useDispatch();

  /*  useEffect(() => {}, [data1, data2]); */

  const likeAction = postId => {
    dispatch(likePost(postId));
    setIsLikeAction(true);
  };

  const unLikeAction = () => {
    dispatch(unLikePost(postId));
    setIsLikeAction(false);
  };

  return (
    <LayOut>
      {isLikeAction ? (
        <ActiveLikeButton
          onClick={() => {
            console.log(postId);
            return unLikeAction(postId);
          }}
        >
          <LikeCount>{like}</LikeCount>
        </ActiveLikeButton>
      ) : (
        <NotActiveLikeButton
          onClick={() => {
            console.log(postId);
            return likeAction(postId);
          }}
        >
          <LikeCount>{like}</LikeCount>
        </NotActiveLikeButton>
      )}

      <CommentButton>
        <CommentCount>{comment}</CommentCount>
      </CommentButton>
    </LayOut>
  );
}
