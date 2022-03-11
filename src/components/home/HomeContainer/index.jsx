import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFollowerPostList } from "../../../actions/followAction";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalListBtn, ModalAlertBtn } from "../../common/Modal";
import { Alert, AlertBtn } from "../../common/Alert";
import { ProfileSection, NoneFeed, SearchBtn } from "./index.style";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
import PostCard from "../../common/PostCard";
import dayjs from "dayjs";

function HomeContainer() {
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
        <ProfileSection>
          <NoneFeed>
            <span> 유저를 검색해 팔로우 해보세요</span>
          </NoneFeed>
          <Link to={"/search"}>
            <SearchBtn>검색하기</SearchBtn>
          </Link>
        </ProfileSection>
      )}
      <Modal visible={postDialog}>
        <ModalAlertBtn isAlert={isPostAlert}>신고하기</ModalAlertBtn>
        <ModalListBtn isDialog={isPostDialog}>모달창 닫기</ModalListBtn>
      </Modal>
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <AlertBtn isAlert={isPostAlert}>예</AlertBtn>
        <AlertBtn isAlert={isPostAlert}>아니요</AlertBtn>
      </Alert>
    </>
  );
}
export default HomeContainer;
