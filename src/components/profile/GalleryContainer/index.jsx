import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, listPosts } from "../../../actions/postActions";
import {
  getWhichUserStatus,
  getWhichUserAccountName,
} from "../../../util/getWhichUser";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
import dayjs from "dayjs";
import {
  GallerySection,
  GalleryHeader,
  GalleryHeaderIconWrapper,
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
  const [postDialog, setPostDialog] = useState(false);

  const [postAlert, setPostAlert] = useState(false);

  const [postId, setPostId] = useState("");

  const accountnameFromParams = getWhichUserAccountName();

  const dispatch = useDispatch();

  const [gallery, setGallery] = useState(true);

  const { posts } = useSelector(state => state.postList);

  const isPostDialog = postId => {
    console.log(postId, "postId 값 들어와라!");
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
        {/* Header Part */}
        <GalleryHeader>
          <GalleryHeaderIconWrapper>
            <CardGalleryBtn onClick={galleryHandler} disabled={gallery}>
              {gallery ? <GalleryIcon alt="on" /> : <GalleryIcon alt="off" />}
            </CardGalleryBtn>
            <AlbumGalleryBtn onClick={galleryHandler} disabled={!gallery}>
              {gallery ? <AlbumIcon alt="off" /> : <AlbumIcon alt="on" />}
            </AlbumGalleryBtn>
          </GalleryHeaderIconWrapper>
        </GalleryHeader>
        {/* PostPart */}
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
      {/* Post Modal */}
      {getWhichUserStatus() === "my" ? (
        <>
          <Modal visible={postDialog}>
            <ModalAlertBtn isAlert={isPostAlert}>삭제</ModalAlertBtn>
            <ModalListBtn isDialog={isPostDialog}>수정</ModalListBtn>
            <ModalListBtn isDialog={isPostDialog}>닫기</ModalListBtn>
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
          <Modal visible={postDialog}>
            <ModalAlertBtn isAlert={isPostAlert}>신고</ModalAlertBtn>
            <ModalListBtn isDialog={isPostDialog}>닫기</ModalListBtn>
          </Modal>
          <Alert visible={postAlert} messageText="게시글을 신고할까요?">
            <AlertBtn isAlert={isPostAlert}>취소</AlertBtn>
          </Alert>
        </>
      )}
    </>
  );
}
export default GalleryContainer;
