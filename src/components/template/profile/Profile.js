import React, { useState } from "react";
import styled from "styled-components";
import UserInfo from "../../UserInfo";
import UserInfoBox from "../../module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../../module/post/ContentBox";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
import { Alert, AlertBox } from "../../module/alert/Alert";
import IconBox from "../../module/post/IconBox";
import Date from "../../module/post/Date";
import DisplayButton from "../../module/profile/DisplayButton";
import testImg2 from "../../../asset/8px.png";
import more from "../../../asset/icon-more-vertical.svg";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Product from "../../module/product/Product";

// myProfile 부분입니다.
// yourProfile 부분입니다.
const Profile = () => {
  // 🕹 네비게이션 Modal & Alert
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  // 🏞 게시글 모달 Modal & Alert
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  // 🏞 상품 모달 Modal & Alert
  const [productDialog, setProductDialog] = useState(false);
  const [productAlert, setProductAlert] = useState(false);
  const isProductDialog = () => setProductDialog(!productDialog);
  const isProductAlert = () => setProductAlert(!productAlert);

  return (
    <>
      <Header />
      <LayOut>
        <UserInfo></UserInfo>
        <Product></Product>
        <PostContainer>
          <DisplayButton></DisplayButton>
          <PostWrapper>
            <Container>
              <UserInfoBox name="text" id="id" />
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
              <MoreBtn onClick={isPostDialog} />
              <button onClick={isNavDialog}>테스트 버튼 삭제 가능</button>
              <button onClick={isProductDialog}>테스트 버튼 삭제 가능</button>
            </Container>
          </PostWrapper>
        </PostContainer>
      </LayOut>
      <Navigation />
      <Modal visible={navDialog}>
        <ListBtn isDialog={isNavDialog}>설정 및 개인정보</ListBtn>
        <AlertBtn isAlert={isNavAlert}>로그아웃</AlertBtn>
        <ListBtn isDialog={isNavDialog}>모달창 닫기</ListBtn>
      </Modal>
      {/* Nav Alert */}
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBox isAlert={isNavAlert}>예</AlertBox>
        <AlertBox isAlert={isNavAlert}>아니요</AlertBox>
      </Alert>

      {/* Product Modal */}
      <Modal visible={productDialog}>
        <AlertBtn isAlert={isProductAlert}>삭제</AlertBtn>
        <ListBtn isDialog={isProductDialog}>수정</ListBtn>
        <ListBtn isDialog={isProductDialog}>웹사이트에서 상품 보기</ListBtn>
      </Modal>
      {/* Product Alert */}
      <Alert visible={productAlert} messageText="상품을 삭제할까요?">
        <AlertBox isAlert={isProductAlert}>예</AlertBox>
        <AlertBox isAlert={isProductAlert}>아니요</AlertBox>
      </Alert>

      {/* Post Modal */}
      <Modal visible={postDialog}>
        <ListBtn isDialog={isPostDialog}>수정</ListBtn>
        <AlertBtn isAlert={isPostAlert}>삭제</AlertBtn>
        <ListBtn isDialog={isPostDialog}>닫기</ListBtn>
      </Modal>
      {/* Post Alert */}
      <Alert visible={postAlert} messageText="게시글을 삭제할까요?">
        <AlertBox isAlert={isPostAlert}>예</AlertBox>
        <AlertBox isAlert={isPostAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const PostContainer = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  margin-bottom: 0;
`;

const PostWrapper = styled.div`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 16px 16px 70px;
`;

const Container = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-bottom: 20px;
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

export default Profile;
