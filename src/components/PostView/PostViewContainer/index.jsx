import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { getUserMyProfile } from "../../../actions/userActions";
import { getPost } from "../../../actions/postActions";
import CommentCard from "../CommentCard";
import { UserInfoBox } from "../../module/post/UserInfoBox";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
import PostIconBox from "../../common/PostIconBox";
import Date from "../../module/post/Date";
import { Alert, AlertBox } from "../../module/alert/Alert";
import {
  LayOut,
  Container,
  ContentBox,
  ContentText,
  ImageContainer,
  ImageList,
  ItemWrapper,
  BtnList,
  MoreBtn,
} from "./index.style";

const PostViewContainer = ({ postId }) => {
  const dispatch = useDispatch();

  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
  );
  const { content, updatedAt, heartCount, commentCount, postImages, hearted } =
    useSelector(state => state?.postRead);

  const { craeteCommentId } = useSelector(state => state.commentCreate);

  const { deleteCommentId } = useSelector(state => state.commentDelete);

  useEffect(() => {
    //프로필 정보 얻어오기 API
    dispatch(getUserMyProfile(postId));
  }, [dispatch]);

  useEffect(() => {
    //상세 게시글 불러오기 API
    dispatch(getPost(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

  // 🏞 게시글 모달 Modal & Alert
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  return (
    <>
      <LayOut>
        <Container>
          {/* 유저 인포 */}
          <UserInfoBox profileImage={image} name={username} id={accountname} />
          {/* 게시글 영역 */}
          <ContentBox>
            <ContentText>{content}</ContentText>
            <ImageContainer>
              <ImageList>
                {postImages &&
                  postImages.map(postImage => {
                    return (
                      <ItemWrapper key={postImage}>
                        <img src={postImage} alt="게시글 이미지" />
                      </ItemWrapper>
                    );
                  })}
              </ImageList>
              <BtnList>
                {postImages &&
                  postImages.map(item => {
                    return <button key={item} />;
                  })}
              </BtnList>
            </ImageContainer>
            <PostIconBox
              like={heartCount}
              comment={commentCount}
              postId={postId}
              hearted={hearted}
            />
            <Date>{dayjs(updatedAt).format("YY년 MM월 DD일")}</Date>
          </ContentBox>
          <MoreBtn onClick={isPostDialog} />
        </Container>
        <CommentCard postId={postId} />
      </LayOut>

      {/* 게시글 Modal */}
      <Modal visible={postDialog}>
        <AlertBtn isAlert={isPostAlert}>신고하기</AlertBtn>
        <ListBtn isDialog={isPostDialog}>닫기</ListBtn>
      </Modal>
      {/* 게시글 Alert */}
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <AlertBox isAlert={isPostAlert}>네</AlertBox>
        <AlertBox isAlert={isPostAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

export default PostViewContainer;
