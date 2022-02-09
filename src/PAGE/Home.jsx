import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowerPostList } from "../actions/followAction";
import styled, { css } from "styled-components";
import UserInfoBox from "../components/module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../components/module/post/ContentBox";
import { Button } from "../components/module/button/button";
import IconBox from "../components/module/post/IconBox";
import Date from "../components/module/post/Date";
import more from "../asset/icon-more-vertical.svg";
import dayjs from "dayjs";

const Home = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(state => state.followerPostList);

  useEffect(() => {
    dispatch(getFollowerPostList());
  }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      {posts ? (
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
                  <MoreBtn />
                </Container>
              );
            })}
        </LayOut>
      ) : (
        <LayOut center>
          {/* <HomeLogo></HomeLogo> */}
          <Button size="lg" width="120px">
            검색하기
          </Button>
        </LayOut>
      )}
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

export default Home;
