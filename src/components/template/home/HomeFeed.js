import React, { useState } from "react";
import styled, { css } from "styled-components";
import UserInfoBox from "../../module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../../module/post/ContentBox";
import { Button } from "../../module/button/Button";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
import { Alert, AlertBox } from "../../module/alert/Alert";
import IconBox from "../../module/post/IconBox";
import Date from "../../module/post/Date";
import testImg from "../../../asset/Ellipse 6.png";
import testImg2 from "../../../asset/8px.png";
import more from "../../../asset/icon-more-vertical.svg";

const HomeFeed = () => {
  const [test, SetTest] = useState(true);

  // 게시글 메뉴
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);
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

      {/* <Navigation></Navigation> */}
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
