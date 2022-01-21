import React from "react";
import styled from "styled-components";

import More from "../asset/icon/icon-more-vertical.png";
import Heart from "../asset/icon/icon-heart.png";
import Message from "../asset/icon/icon-message-circle.png";
import Test from "../asset/chat-exapmle.png";
import Profile from "../asset/product-img-example.png";

// 무슨 문제인지 저도 잘 모르겠네요

const PostContainer = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-bottom: 40px;
`;

const PostAuthorContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;
`;

const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
`;
const AuthorId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;

const ContentContainer = styled.section`
  padding-left: 54px;
`;

const ContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

const ContentImgContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImgList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

const ImgItem = styled.li`
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

const ButtonListContainer = styled.ul`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
`;

const ListButton = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
`;

const CommentContainer = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  color: #767676;
  margin-right: 18px;
  background-color: inherit;
  padding: 0;

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${Heart}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;

const LikeCount = styled.span``;

const CommentButton = styled.a`
  display: flex;
  align-items: center;
  color: #767676;

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${Message}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
`;
const CommentCount = styled.span``;

const PostDate = styled.strong`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #767676;
`;
const MoreBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${More}}) no-repeat center / 18px 18px;
  background-color: inherit;
`;

function Post({
  authorId,
  authorName,
  content,
  likeCount,
  commentCount,
  date,
}) {
  return (
    <PostContainer>
      {/* 유저 info Container */}
      <PostAuthorContainer>
        <ProfileImg src={Profile}></ProfileImg>
        <AuthorInfoWrapper>
          <AuthorName>{authorName}</AuthorName>
          <AuthorId>{authorId}</AuthorId>
        </AuthorInfoWrapper>
      </PostAuthorContainer>
      {/* 입력 컨텐츠 Container */}
      <ContentContainer>
        <ContentText>{content}</ContentText>
        <ContentImgContainer>
          <ImgList>
            <ImgItem>
              <img src={Test} />
            </ImgItem>
            <ImgItem></ImgItem>
          </ImgList>
          <ButtonListContainer>
            <ListButton></ListButton>
          </ButtonListContainer>
        </ContentImgContainer>
      </ContentContainer>
      {/* 좋아요 및 댓글 Container */}
      <CommentContainer>
        <LikeButton>
          <LikeCount>{likeCount}</LikeCount>
        </LikeButton>
        <CommentButton>
          <CommentCount>{commentCount}</CommentCount>
        </CommentButton>
        <MoreBtn></MoreBtn>
      </CommentContainer>
      {/* Date 관련 Tag */}
      <PostDate>{date}</PostDate>
    </PostContainer>
  );
}

export default Post;
