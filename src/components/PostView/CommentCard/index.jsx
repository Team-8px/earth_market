import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import {
  getCommentList,
  deleteComment,
  commentCreateAction,
} from "../../../actions/commentAction";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
import { ReplyBox, CommentList } from "../../module/post/ReplyBox";
import ProfileIcon from "../../../asset/icon/basic-profile.svg";
import { Alert, AlertBox } from "../../module/alert/Alert";
import {
  SubmitChatLayOut,
  SubmitChatContainer,
  SubmitChatLabel,
  SubmitChatInput,
  SubmitChatButton,
  ProfileLinkImg,
} from "./index.style";

const CommentCard = ({ postId }) => {
  const [chatDialog, setChatDialog] = useState(false);
  const [chatAlert, setChatAlert] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const { craeteCommentId } = useSelector(state => state.commentCreate);

  const { deleteCommentId } = useSelector(state => state.commentDelete);

  const commentList = useSelector(state => state.commentList.comments);

  const onSubmit = data => {
    const { comment } = data;
    dispatch(commentCreateAction(comment, postId));
    reset();
  };

  const onClickDeleteComment = commentId => {
    //댓글 삭제 API
    dispatch(deleteComment(postId, commentId));
  };

  useEffect(() => {
    //댓글 리스트 가져오기 API
    dispatch(getCommentList(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

  const isChatDialog = () => setChatDialog(!chatDialog);
  const isChatAlert = () => setChatAlert(!chatAlert);

  return (
    <>
      <CommentList>
        {commentList &&
          commentList.map(user => {
            console.log(user?.createdAt);
            return (
              <ReplyBox
                img={user?.author?.image}
                username={user?.author?.username}
                time={user?.createdAt}
                comment={user?.content}
                key={user?.id}
                isDialog={isChatDialog}
              />
            );
          })}
      </CommentList>

      <SubmitChatLayOut>
        <SubmitChatContainer
          onSubmit={handleSubmit(onSubmit)}
          autocomplete="new-password"
        >
          <ProfileLinkImg src={ProfileIcon} alt="프로필" />
          <SubmitChatLabel>
            <span className="textHidden">댓글 입력하기</span>
            <SubmitChatInput
              name="comment"
              type="text"
              placeholder="댓글 입력하기"
              autoComplete="off"
              {...register("comment")}
            />
          </SubmitChatLabel>
          <SubmitChatButton>게시</SubmitChatButton>
        </SubmitChatContainer>
      </SubmitChatLayOut>

      {/* chat Modal */}
      <Modal visible={chatDialog}>
        <AlertBtn isAlert={isChatAlert}>신고하기</AlertBtn>
        <ListBtn isDialog={isChatDialog}>닫기</ListBtn>
      </Modal>

      {/* chat Alert */}
      <Alert visible={chatAlert} messageText="신고하시겠어요?">
        <AlertBox isAlert={isChatAlert}>네</AlertBox>
        <AlertBox isAlert={isChatAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

export default CommentCard;
