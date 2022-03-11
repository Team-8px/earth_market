import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { getUserMyProfile } from "../../../actions/userActions";
import { getPost } from "../../../actions/postActions";
import CommentCard from "../CommentCard";
import { UserInfoBox } from "../../module/post/UserInfoBox";
import { Modal, ModalAlertBtn, ModalListBtn } from "../../common/Modal";
import { Alert, AlertBtn } from "../../common/Alert";
import Date from "../../module/post/Date";
import PostIconBox from "../../common/PostIconBox";
import basicImg from "../../../asset/basic-profile-img.svg";
import {
  LayOut,
  Container,
  ContentBox,
  ContentText,
  ImageContainer,
  ImageList,
  ItemWrapper,
  ItemImage,
  BtnList,
  DotWrapper,
  DotBtn,
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

  const [activeIndex, setActiveIndex] = useState(0);
  const moveSlide = (e, i) => {
    setActiveIndex(i);
    const target = e.target.parentNode.parentNode.parentNode.firstChild;
    target.style.transform = `translateX(${-304 * Number(i)}px)`;
  };
  const trigger = e => {
    e.target.src = basicImg;
  };
  const imgErrorHandler = e => {
    const target = e.target.parentNode.parentNode;
    target.style.display = "none";
  };

  useEffect(() => {
    //프로필 정보 얻어오기 API
    dispatch(getUserMyProfile(postId));
  }, [dispatch]);

  useEffect(() => {
    //상세 게시글 불러오기 API
    dispatch(getPost(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

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
                        <ItemImage
                          src={postImage}
                          alt="게시글 이미지"
                          onError={e => imgErrorHandler(e)}
                        />
                      </ItemWrapper>
                    );
                  })}
              </ImageList>
              <BtnList>
                {postImages?.length !== 1 ? (
                  <DotWrapper>
                    {postImages &&
                      postImages.map((_, i) => (
                        <DotBtn
                          key={Math.random() * 100}
                          onClick={e => moveSlide(e, i)}
                          className={activeIndex === i ? "current" : ""}
                        />
                      ))}
                  </DotWrapper>
                ) : null}
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
      <Modal visible={postDialog}>
        <ModalAlertBtn isAlert={isPostAlert}>신고하기</ModalAlertBtn>
        <ModalListBtn isDialog={isPostDialog}>닫기</ModalListBtn>
      </Modal>
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <AlertBtn isAlert={isPostAlert}>네</AlertBtn>
        <AlertBtn isAlert={isPostAlert}>아니요</AlertBtn>
      </Alert>
    </>
  );
};

export default PostViewContainer;
