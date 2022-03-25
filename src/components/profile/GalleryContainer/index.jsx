import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, listPosts } from "../../../actions/postActions";
import {
  getWhichUserStatus,
  getWhichUserAccountName,
} from "../../../util/getWhichUser";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
import dayjs from "dayjs";
import {
  GallerySection,
  GalleryWrapper,
  GalleryIconList,
  GalleryIconItem,
  CardGalleryBtn,
  GalleryIcon,
  AlbumGalleryBtn,
  AlbumIcon,
  AlbumContainer,
  AlbumList,
} from "./index.style";
import { Modal, ModalListBtn, ModalAlertBtn } from "../../common/Modal";
import { Alert, AlertBtn } from "../../common/Alert";

import PostCard from "../../common/PostCard";
import AlbumGallery from "../AlbumGallery";

function GalleryContainer() {
  const accountnameFromParams = getWhichUserAccountName();
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const [postId, setPostId] = useState("");
  const [gallery, setGallery] = useState(true);
  const { posts } = useSelector(state => state.postList);
  const dispatch = useDispatch();

  const isPostDialog = postId => {
    setPostDialog(!postDialog);
    setPostId(postId);
  };
  const isPostAlert = postId => {
    setPostAlert(!postAlert);
    if (typeof postId === "string") {
      dispatch(deletePost(postId));
    }
  };

  useEffect(() => {
    dispatch(listPosts(accountnameFromParams));
  }, [dispatch, accountnameFromParams]);

  const galleryHandler = () => {
    setGallery(!gallery);
  };
  return (
    <>
      <GallerySection>
        <h4 className="a11y-hidden">게시물</h4>
        <GalleryWrapper>
          <GalleryIconList>
            <GalleryIconItem>
              <CardGalleryBtn onClick={galleryHandler} disabled={gallery}>
                {gallery ? (
                  <GalleryIcon alt="리스트로 보기" />
                ) : (
                  <GalleryIcon alt="리스트로 보기 취소" />
                )}
              </CardGalleryBtn>
            </GalleryIconItem>
            <GalleryIconItem>
              <AlbumGalleryBtn onClick={galleryHandler} disabled={!gallery}>
                {gallery ? (
                  <AlbumIcon alt="갤러리로 보기" />
                ) : (
                  <AlbumIcon alt="갤러리로 보기 취소" />
                )}
              </AlbumGalleryBtn>
            </GalleryIconItem>
          </GalleryIconList>
        </GalleryWrapper>

        {gallery ? (
          posts &&
          posts.map(post => {
            const postImages = post?.image?.split(",");
            return (
              <PostCard
                key={post.id}
                postid={post.id}
                Link={`/post/${post.id}`}
                profileImage={changeDefaltImage(post.author.image)}
                username={post.author.username}
                accountname={post.author.accountname}
                content={post.content}
                postImages={postImages}
                likeCount={post.heartCount}
                commentCount={post.comments.length}
                updatedAt={dayjs(post.updatedAt).format("YY년 MM월 DD일")}
                postDialog={isPostDialog}
                hearted={post.hearted}
              />
            );
          })
        ) : (
          <AlbumContainer>
            <AlbumList>
              {posts &&
                posts.map(post => {
                  const firstImage = post?.image?.split(",")[0];
                  return (
                    <AlbumGallery
                      key={post.id}
                      postImages={firstImage}
                      Link={`/post/${post.id}`}
                    />
                  );
                })}
            </AlbumList>
          </AlbumContainer>
        )}
      </GallerySection>

      {getWhichUserStatus() === "my" ? (
        <>
          <Modal visible={postDialog} close={() => setPostDialog(false)}>
            <ModalAlertBtn isAlert={isPostAlert}>삭제</ModalAlertBtn>
            <Link to={`/post/${postId}/update`}>
              <ModalListBtn isDialog={isPostDialog}>수정</ModalListBtn>
            </Link>
          </Modal>
          <Alert visible={postAlert} messageText="게시글을 삭제할까요?">
            <AlertBtn isAlert={isPostAlert}>취소</AlertBtn>
            <AlertBtn isAlert={() => isPostAlert(postId && postId)}>
              삭제
            </AlertBtn>
          </Alert>
        </>
      ) : (
        <>
          <Modal visible={postDialog} close={() => setPostDialog(false)}>
            <ModalAlertBtn isAlert={isPostAlert}>신고</ModalAlertBtn>
            <ModalListBtn isDialog={isPostDialog}>닫기</ModalListBtn>
          </Modal>
          <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
            <AlertBtn isAlert={isPostAlert}>예</AlertBtn>
            <AlertBtn isAlert={isPostAlert}>아니요</AlertBtn>
          </Alert>
        </>
      )}
    </>
  );
}
export default GalleryContainer;
