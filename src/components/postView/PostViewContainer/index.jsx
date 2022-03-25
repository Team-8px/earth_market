import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../../../actions/postActions";
import { getUserProfile } from "../../../actions/userActions";
import { getAccountNameFromloacalStorage } from "../../../util/getWhichUser";
import CommentCard from "../CommentCard";
import { Modal, ModalAlertBtn } from "../../common/Modal";
import { Alert, AlertBtn } from "../../common/Alert";
import PostIconBox from "../../common/PostIconBox";
import {
  PostDetailSection,
  PostCardWrapper,
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
  Date,
  CommentSection,
  ProfileImg,
  Wrapper,
  Name,
  Id,
} from "./index.style";

const PostViewContainer = ({ postId }) => {
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const [isAuthorization, setIsAuthorization] = useState();
  const dispatch = useDispatch();
  const { content, updatedAt, heartCount, commentCount, postImages, hearted } =
    useSelector(state => state?.postRead);
  const author = useSelector(state => state?.postRead?.post?.author);
  const { craeteCommentId } = useSelector(state => state.commentCreate);
  const { image, accountname } = useSelector(state => state.userReadProfile);
  const { deleteCommentId } = useSelector(state => state.commentDelete);
  const [activeIndex, setActiveIndex] = useState(0);

  const moveSlide = (e, i) => {
    setActiveIndex(i);
    const target = e.target.parentNode.parentNode.parentNode.firstChild;
    target.style.transform = `translateX(${-304 * Number(i)}px)`;
  };

  const imgErrorHandler = e => {
    const target = e.target.parentNode.parentNode;
    target.style.display = "none";
  };

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

  useEffect(() => {
    dispatch(getUserProfile(accountname));
  }, [dispatch]);

  useEffect(() => {
    if (author?.accountname === getAccountNameFromloacalStorage()) {
      setIsAuthorization(true);
    } else {
      setIsAuthorization(false);
    }
  }, [author]);

  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = postId => {
    setPostAlert(!postAlert);
    if (typeof postId === "string") {
      dispatch(deletePost(postId));
    }
  };

  return (
    <>
      <PostDetailSection className="test">
        <CommentSection>
          <PostCardWrapper>
            <Link to={`/profile/${author?.accountname}`}>
              <ProfileImg src={author?.image} />
            </Link>
            <Wrapper>
              <Name>{author?.username}</Name>
              <Id>{author?.accountname}</Id>
              <MoreBtn onClick={isPostDialog} />
            </Wrapper>
          </PostCardWrapper>
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
            <Date>{updatedAt}</Date>
          </ContentBox>
        </CommentSection>
        <CommentCard postId={postId} myProfileImg={image} />
      </PostDetailSection>
      {isAuthorization ? (
        <>
          <Modal visible={postDialog} close={() => setPostDialog(false)}>
            <ModalAlertBtn isAlert={isPostAlert}>삭제</ModalAlertBtn>
          </Modal>
          <Alert visible={postAlert} messageText="게시글을 삭제 하시겠어요?">
            <AlertBtn isAlert={() => isPostAlert(postId)}>네</AlertBtn>
            <AlertBtn isAlert={isPostAlert}>아니요</AlertBtn>
          </Alert>
        </>
      ) : (
        <>
          <Modal visible={postDialog} close={() => setPostDialog(false)}>
            <ModalAlertBtn isAlert={isPostAlert}>신고하기</ModalAlertBtn>
          </Modal>
          <Alert visible={postAlert} messageText="신고 하시겠어요?">
            <AlertBtn isAlert={isPostAlert}>네</AlertBtn>
            <AlertBtn isAlert={isPostAlert}>아니요</AlertBtn>
          </Alert>
        </>
      )}
    </>
  );
};

export default PostViewContainer;
