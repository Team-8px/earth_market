import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getCommentList,
  deleteComment,
  commentCreateAction,
  
} from "../../../actions/commentAction";
import { getUserProfile } from "../../../actions/userActions"
import { getWhichUserAccountName } from "../../../util/getWhichUser";
import { Modal, ModalAlertBtn, ModalListBtn } from "../../common/Modal";
import { Alert, AlertBtn } from "../../common/Alert";
import { CommentList, CommentItem } from "../CommentItem";
import basicImg from "../../../asset/basic-profile-img.svg";
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

  const [commentId, setCommentId] = useState();

  const [isAuthorization, setIsAuthorization] = useState();

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const { craeteCommentId } = useSelector(state => state.commentCreate);
  const { image } = useSelector(state => state.userReadProfile);
  const { deleteCommentId } = useSelector(state => state.commentDelete);

  const commentList = useSelector(state => state.commentList.comments);

  useEffect(() => {
    dispatch(getCommentList(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);
  
  const accountnameFromParams = getWhichUserAccountName();
  
  useEffect(() => {
    dispatch(getUserProfile("sweetpotato"));
  }, [dispatch]);

  const isChatDialog = commentId => {
    setCommentId(commentId);
    setChatDialog(!chatDialog);
  };

  const isChatAlert = commentId => {
    setChatAlert(!chatAlert);
    if (typeof commentId === "string") {
      dispatch(deleteComment(postId, commentId));
      setChatDialog(!chatDialog);
    }
  };

  const onSubmit = data => {
    const { comment } = data;
    dispatch(commentCreateAction(comment, postId));
    reset();
  };

  return (
    <>
      <CommentList>
        {commentList &&
          commentList.map(comment => {
            return (
              <CommentItem
                img={comment?.author?.image}
                username={comment?.author?.username}
                accountname={comment?.author?.accountname}
                time={comment?.createdAt}
                comment={comment?.content}
                key={comment?.id}
                commentId={comment?.id}
                isDialog={isChatDialog}
                setIsAuthorization={setIsAuthorization}
              />
            );
          })}
      </CommentList>
      <SubmitChatLayOut>
        <SubmitChatContainer
          onSubmit={handleSubmit(onSubmit)}
          autocomplete="new-password"
        >
          <ProfileLinkImg src={image || basicImg} alt="프로필" />
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
      {isAuthorization ? (
        <>
          <Modal
            visible={chatDialog}
            close={() => {
              setChatDialog(false);
            }}
          >
            <ModalAlertBtn isAlert={isChatAlert}>삭제</ModalAlertBtn>
          </Modal>
          <Alert visible={chatAlert} messageText="삭제 하시겠어요?">
            <AlertBtn isAlert={() => isChatAlert(commentId)}>네</AlertBtn>
            <AlertBtn isAlert={isChatAlert}>아니요</AlertBtn>
          </Alert>
        </>
      ) : (
        <>
          <Modal
            visible={chatDialog}
            close={() => {
              setChatDialog(false);
            }}
          >
            <ModalAlertBtn isAlert={isChatAlert}>신고하기</ModalAlertBtn>
          </Modal>

          <Alert visible={chatAlert} messageText="신고 하시겠어요?">
            <AlertBtn isAlert={() => isChatAlert(commentId)}>네</AlertBtn>
            <AlertBtn isAlert={isChatAlert}>아니요</AlertBtn>
          </Alert>
        </>
      )}
    </>
  );
};

export default CommentCard;
