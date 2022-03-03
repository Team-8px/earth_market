import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFollowerPostList } from "../actions/followAction";
import styled from "styled-components";
import { UserInfoBox } from "../components/module/post/UserInfoBox";
import { Button } from "../components/module/button/button";
import { Modal, AlertBtn, ListBtn } from "../components/module/modal/Modal";
import { Alert, AlertBox } from "../components/module/alert/Alert";
import IconBox from "../components/module/post/IconBox";
import Date from "../components/module/post/Date";
import more from "../asset/icon-more-vertical.svg";
import dayjs from "dayjs";
import NoneFeed from "../components/NoneFeed";
import Navbar from "../components/common/Navbar";

// import Navigation from "../components/template/common/Navigation";
import HomeHeader from "../components/header/HomeHeader";
const Home = () => {
  // 게시글 메뉴
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  const dispatch = useDispatch();
  //팔로우 한 사람들의 게시글 목록 불러오기
  const { posts } = useSelector(state => state?.followerPostList);
  console.log(posts);
  useEffect(() => {
    // 게시글 불러오기 API
    dispatch(getFollowerPostList());
  }, [dispatch]);

  return (
    <>
      <HomeHeader />
      {posts?.length !== 0 ? (
        <LayOut>
          {posts &&
            posts.map(post => {
              const postImages = post?.image?.split(",");
              return (
                <Container key={post.id}>
                  {/* 유저 인포 */}
                  <UserInfoBox
                    profileImage={post.author.image}
                    name={post.author.username}
                    id={post.author.accountname}
                  />
                  {/* 게시글 영역 */}
                  <ContentBox>
                    <ContentText>{post.content}</ContentText>
                    <ImageContainer>
                      <ImageList>
                        {postImages &&
                          postImages.map(img => {
                            return (
                              <ItemWrapper to={`/post/${post.id}`} key={img}>
                                <img src={img} alt="게시글 이미지" />
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
          <Link to="/search">
            <Button size="lg" width="120px">
              검색하기
            </Button>
          </Link>
        </LayOut>
      )}
      <Navbar />
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
const ContentBox = styled.section`
  padding-left: 54px;
`;
const ContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

const ItemWrapper = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  min-height: 228px;
  border: 0.5px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 16px;
  }
`;
const BtnList = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);

  button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
  }
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
