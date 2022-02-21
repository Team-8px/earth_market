import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserMyProfile } from "../actions/userActions";
import { getPost } from "../actions/postActions";
import {
  getCommentList,
  deleteComment,
  commentCreateAction,
} from "../actions/commentAction";

// 스타일로직
import { UserInfoBox } from "../components/module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../components/module/post/ContentBox";
import { Button } from "../components/module/button/button";
import { Modal, AlertBtn, ListBtn } from "../components/module/modal/Modal";
import { Alert, AlertBox } from "../components/module/alert/Alert";
import { HeaderHome } from "../components/template/common/Header";
import IconBox from "../components/module/post/IconBox";
import Date from "../components/module/post/Date";
import more from "../asset/icon-more-vertical.svg";
import styled, { css } from "styled-components";
import dayjs from "dayjs";
import { ReplyBox, CommentList } from "../components/module/post/ReplyBox";
const PostView = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  // getPost API에 사용될 데이터
  const { postId } = useParams();
  // 댓글 생성시 useEffect에 적용하여, 재 렌더링 하기 위함
  const { craeteCommentId } = useSelector(state => state.commentCreate);

  // 댓글 삭제시 useEffect에 적용하여, 재 렌더링 하기 위함
  const { deleteCommentId } = useSelector(state => state.commentDelete);

  // 사용자 프로필을 리덕스 스토어에서 가져오기
  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
  );

  // 상세 게시글 스토어에서 가져오기
  const { content, updatedAt, heartCount, commentCount, postImages } =
    useSelector(state => state.postRead);

  // 댓글 리스트 배열을 스토어에서 가져오기
  const commentListArr = useSelector(state => state.commentList.comments);

  // 댓글 생성
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
    //프로필 정보 얻어오기 API
    dispatch(getUserMyProfile());
  }, [dispatch]);

  useEffect(() => {
    //상세 게시글 불러오기 API
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    //댓글 리스트 가져오기 API
    dispatch(getCommentList(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  const [chatDialog, setChatDialog] = useState(false);
  const [chatAlert, setChatAlert] = useState(false);
  const isChatDialog = () => setChatDialog(!chatDialog);
  const isChatAlert = () => setChatAlert(!chatAlert);

  return (
    <>
      <HeaderHome />
      <LayOut>
        <Container>
          {/* 유저 인포 */}
          <UserInfoBox profileImage={image} name={username} id={accountname} />
          {/* 게시글 영역 */}
          <ContentBox content={content}>
            <ImgContainer>
              <ImgList>
                {postImages &&
                  postImages.map((postImage, index) => {
                    return (
                      <img key={index} src={postImage} alt="게시글 이미지" />
                    );
                  })}
              </ImgList>
              <ButtonList>
                <button></button>
              </ButtonList>
            </ImgContainer>
            <IconBox like={heartCount} comment={commentCount} />
            <Date>{dayjs(updatedAt).format("YY년 MM월 DD일")}</Date>
          </ContentBox>
          <MoreBtn onClick={isPostDialog} />
        </Container>
        {/* 댓글 리스트*/}
        <CommentList>
          {commentListArr &&
            commentListArr.map(user => {
              return (
                <ReplyBox
                  img={user?.author?.image}
                  username={user?.author?.username}
                  time={"15분전"}
                  comment={user?.content}
                  key={user?.id}
                  isDialog={isChatDialog}
                />
              );
            })}
        </CommentList>
        {/* 댓글 생성 */}
        <CommentContainer onSubmit={handleSubmit(onSubmit)}>
          <CommentLayOut>
            <ProfileLinkImg />
            <CommentLabel>
              댓글 입력하기
              <CommentInput
                name="comment"
                type="text"
                placeholder="댓글 입력하기"
                {...register("comment")}
              />
            </CommentLabel>
            <CommentButton>게시</CommentButton>
          </CommentLayOut>
        </CommentContainer>
      </LayOut>

      {/* 게시글 Modal */}
      <Modal visible={postDialog}>
        <AlertBtn isAlert={isPostAlert}>신고하기</AlertBtn>
        <ListBtn isDialog={isPostDialog}>모달창 닫기</ListBtn>
      </Modal>
      {/* 게시글 Alert */}
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <AlertBox isAlert={isPostAlert}>예</AlertBox>
        <AlertBox isAlert={isPostAlert}>아니요</AlertBox>
      </Alert>

      {/* chat Modal */}
      <Modal visible={chatDialog}>
        <AlertBtn isAlert={isChatAlert}>신고하기</AlertBtn>
        <ListBtn isDialog={isChatDialog}>모달창 닫기</ListBtn>
      </Modal>

      {/* chat Alert */}
      <Alert visible={chatAlert} messageText="신고하시겠어요?">
        <AlertBox isAlert={isChatAlert}>예</AlertBox>
        <AlertBox isAlert={isChatAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `}
  position: fixed;
  height: calc(100% - 108px);
  overflow-y: scroll;
  min-width: 390px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  margin-top: 48px;
`;

const Container = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-bottom: 40px;
`;
const MoreBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${more}) no-repeat center / 18px 18px;
  background-color: inherit;
`;

const CommentLayOut = styled.section`
  position: fixed;
  width: 0 auto;
  left: 0;
  bottom: 0;
  min-width: 390px;
  width: 100%;
  padding: 12px 0;
  border-style: none;
  border-top: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

const CommentContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
`;

const ProfileLinkImg = styled.img`
  width: 36px;
  cursor: pointer;
`;

const CommentLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 1px;
  color: transparent;
`;

const CommentInput = styled.input`
  display: block;
  border-style: none;
  margin-left: 16px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const CommentButton = styled.button`
  width: 30px;
  border-style: none;
  margin-right: 4px;
  color: #c4c4c4;
  &:focus {
    color: #f26e22;
  }
`;

export default PostView;
