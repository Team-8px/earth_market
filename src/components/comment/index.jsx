import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentCreateAction } from "../../actions/commentAction";

const Comment = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const submitHandler = () => {
    dispatch(commentCreateAction(comment));
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
export default Comment;
