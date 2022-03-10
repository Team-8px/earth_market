import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likePost, unLikePost, getPost } from "../../../actions/postActions";
import {
  LayOut,
  ActiveLikeButton,
  NotActiveLikeButton,
  LikeCount,
  CommentButton,
  CommentCount,
} from "./index.style";

export default function PostIconBox({ like, comment, postId }) {
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
