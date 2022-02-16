import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowerPostList } from "../actions/followAction";
import styled from "styled-components";
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
import dayjs from "dayjs";
import NoneFeed from "../components/NoneFeed";
const Home = () => {
  // 게시글 메뉴
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  const dispatch = useDispatch();
  //팔로우 한 사람들의 게시글 목록 불러오기
  const { posts } = useSelector(state => state.followerPostList);

  function isEmptyArr(posts) {
    if (Array.isArray(posts) && posts.length === 0) {
      return false;
    }
    return true;
  }
  console.log(posts && posts);

  useEffect(() => {
    // 게시글 불러오기 API
    dispatch(getFollowerPostList());
  }, [dispatch]);

  return (
    <>
      <HeaderHome />
      {isEmptyArr(posts) ? (
        <LayOut>
          {posts &&
            posts.map(post => {
              return (
                <Container key={post.id}>
                  {/* 유저 인포 */}
                  <UserInfoBox
                    profileImage={post.author.image}
                    name={post.author.username}
                    id={post.author.accountname}
                  />
                  {/* 게시글 영역 */}
                  <ContentBox content={post.content}>
                    <ImgContainer>
                      <ImgList>
                        <img src={post.image} alt="게시글 이미지" />
                      </ImgList>
                      <ButtonList>
                        <button></button>
                      </ButtonList>
                    </ImgContainer>
                    <IconBox
                      like={post.heartCount}
                      comment={post.comments.length}
                    />
                    <Date>
                      {dayjs(post.updatedAt).format("YY년 MM월 DD일")}
                    </Date>
                  </ContentBox>
                  <MoreBtn onClick={isPostDialog} />
                </Container>
              );
            })}
        </LayOut>
      ) : (
        <LayOut>
          <NoneFeed></NoneFeed>
          <Button size="lg" width="120px">
            검색하기
          </Button>
        </LayOut>
      )}
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
    </>
  );
};

const LayOut = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 0;
  height: calc(100% - 108px);
  overflow-y: scroll;
  min-width: 390px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  margin-top: 20px;
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

export default Home;
