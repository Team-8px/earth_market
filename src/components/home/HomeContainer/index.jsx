import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getFollowerPostList } from "../../../actions/followAction";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalAlertBtn } from "../../common/Modal";
import { Alert, AlertBtn } from "../../common/Alert";
import {
  ProfileSection,
  NoneFeed,
  SearchBtn,
  NoneFollowContainer,
} from "./index.style";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
import PostCard from "../../common/PostCard";
import dayjs from "dayjs";

function HomeContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state?.followerPostList);
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  useEffect(() => {
    dispatch(getFollowerPostList());
  }, [dispatch]);

  return (
    <>
      {posts?.length !== 0 ? (
        <ProfileSection>
          {posts &&
            posts.map(post => {
              const postImages = post?.image?.split(",");
              return (
                <PostCard
                  key={Math.random() * 100}
                  postid={post.id}
                  profileImage={changeDefaltImage(post.author.image)}
                  username={post.author.username}
                  accountname={post.author.accountname}
                  content={post.content}
                  postImages={postImages}
                  likeCount={post.heartCount}
                  hearted={post.hearted}
                  commentCount={post.comments.length}
                  updatedAt={dayjs(post.updatedAt).format("YY년 MM월 DD일")}
                  postDialog={isPostDialog}
                  Link={`/post/${post.id}`}
                />
              );
            })}
        </ProfileSection>
      ) : (
        <NoneFollowContainer>
          <NoneFeed>유저를 검색해 팔로우 해보세요</NoneFeed>
          <SearchBtn onClick={() => history.push("/search")}>
            검색하기
          </SearchBtn>
        </NoneFollowContainer>
      )}
      <Modal visible={postDialog} close={() => setPostDialog(false)}>
        <ModalAlertBtn isAlert={isPostAlert}>신고하기</ModalAlertBtn>
      </Modal>
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <AlertBtn isAlert={isPostAlert}>예</AlertBtn>
        <AlertBtn isAlert={isPostAlert}>아니요</AlertBtn>
      </Alert>
    </>
  );
}
export default HomeContainer;
