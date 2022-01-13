import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentAction } from "../actions/commentAction";

const CommentScreen = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const submitHandler = () => {
    dispatch(commentAction(comment));
  };

  return (
    <>
      test
      <div>
        <input
          name="comment"
          type="comment"
          placeholder="댓글 입력하기"
          onChange={(e) => setComment(e.currentTarget.value)}
        />
      </div>
      <div>
        <button onClick={submitHandler}>게시</button>
      </div>
    </>
  );
};
export default CommentScreen;
