import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { commentCreateAction } from "../../actions/commentAction";

const Comment = ({ postId, getComment }) => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async data => {
    const { comment } = data;

    getComment(comment);

    await dispatch(commentCreateAction(comment, postId));
  };

  return (
    <>
      <h1>댓글 작성하기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="comment"
            type="text"
            placeholder="댓글 입력하기"
            {...register("comment")}
          />
        </div>
        <div>
          <button>게시</button>
        </div>
      </form>
    </>
  );
};

export default Comment;
