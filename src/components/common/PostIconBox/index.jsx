import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { likePost, unLikePost, getPost } from "../../../actions/postActions";
import {
  LayOut,
  ActiveLikeButton,
  NotActiveLikeButton,
  LikeCount,
  CommentButton,
  CommentCount,
} from "./index.style";

export default function PostIconBox({ like, comment, postId, hearted }) {
  const history = useHistory();
  const [isLikeAction, setIsLikeAction] = useState(hearted);
  const [likeCount, setLikeCount] = useState(like);
  const dispatch = useDispatch();
  console.log({ hearted: hearted, postId: postId, like: like });

  const likeAction = postId => {
    dispatch(likePost(postId));
    setIsLikeAction(true);
    setLikeCount(current => current + 1);
  };

  const unLikeAction = () => {
    dispatch(unLikePost(postId));
    setIsLikeAction(false);
    setLikeCount(current => current - 1);
  };

  return (
    <LayOut>
      {isLikeAction ? (
        <ActiveLikeButton onClick={() => unLikeAction(postId)}>
          <LikeCount>{likeCount}</LikeCount>
        </ActiveLikeButton>
      ) : (
        <NotActiveLikeButton onClick={() => likeAction(postId)}>
          <LikeCount>{likeCount}</LikeCount>
        </NotActiveLikeButton>
      )}

      <CommentButton onClick={() => history.push(`/post/${postId}`)}>
        <CommentCount>{comment}</CommentCount>
      </CommentButton>
    </LayOut>
  );
}
