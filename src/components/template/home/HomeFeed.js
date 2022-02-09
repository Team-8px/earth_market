import React, { useState } from "react";
import styled, { css } from "styled-components";
import UserInfoBox from "../../module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../../module/post/ContentBox";
import { Button } from "../../module/button/button";
import IconBox from "../../module/post/IconBox";
import Date from "../../module/post/Date";
import testImg from "../../../asset/Ellipse 6.png";
import testImg2 from "../../../asset/8px.png";
import more from "../../../asset/icon-more-vertical.svg";

const HomeFeed = () => {
  const [test, SetTest] = useState(false);
  return (
    <>
      {/* <Header></Header> */}
      {test ? (
        <LayOut center>
          {/* <HomeLogo></HomeLogo> */}
          <Button size="lg" width="120px">
            검색하기
          </Button>
        </LayOut>
      ) : (
        <LayOut>
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

export default HomeFeed;
