import React from "react";
import styled from "styled-components";
import UserInfoBox from "../../module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../../module/post/ContentBox";
import IconBox from "../../module/post/IconBox";
import Date from "../../module/post/Date";
import testImg from "../../../asset/Ellipse 6.png";
import testImg2 from "../../../asset/8px.png";
import more from "../../../asset/icon-more-vertical.svg";
import Header from "../common/Header";

const PostView = () => {
  return (
    <>
      <Header />
      <LayOut>
        <PostLayOut>
          <Container>
            {/* 유저 인포 */}
            <UserInfoBox name="text" id="id" />
            {/* 게시글 영역 */}
            <ContentBox content="content">
              <ImgContainer>
                <ImgList>
                  <img src={testImg2} alt="testImg2" />
                </ImgList>
                <ButtonList>
                  <button></button>
                </ButtonList>
              </ImgContainer>
              <IconBox like="9999" comment="9999" />
              <Date>2022년 2월 4일</Date>
            </ContentBox>
            <MoreBtn />
          </Container>
        </PostLayOut>
        댓글 창
        {/* <List>
        List 태그는 아래 스타일 컴포넌트에 있습니다 !
        <ReplyBox></ReplyBox>
      </List> */}
        댓글 입력창
        {/* <ConmentBox></ConmentBox> */}
      </LayOut>
    </>
  );
};

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  margin-top: 48px;
  position: fixed;
  height: calc(100% - 108px);
  overflow-y: scroll;
`;
const PostLayOut = styled.div`
  width: 100%;
  padding: 20px 16px;
  border-bottom: 1px solid ${props => props.theme.palette["border"]};
`;
const Container = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin: 0 auto;
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
const List = styled.div``;

export default PostView;
