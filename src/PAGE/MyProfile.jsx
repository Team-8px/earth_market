import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// 이미지 모음
import prev from "../asset/icon-arrow-left.svg";
import more from "../asset/icon-more-vertical.svg";

import { Modal, AlertBtn, ListBtn } from "../components/module/modal/Modal";
import { Alert, AlertBox } from "../components/module/alert/Alert";
import Navigation from "../components/template/common/Navigation";

// 작업완료
import ProfileContainer from "../components/profile/ProfileContainer";
import ProductContainer from "../components/profile/ProductContainer";
import GalleryContainer from "../components/profile/GalleryContainer";

const MyProfile = () => {
  const history = useHistory();
  // 좋아요
  const [isLikeAction, setLikeAction] = useState(false);
  console.log(isLikeAction && isLikeAction, "isLikeAction");
  const likeAction = () => setLikeAction(!isLikeAction);
  // 🕹 네비게이션 Modal & Alert
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  return (
    <>
      {/* 헤더 */}
      <HeaderLayOut>
        <HeaderContainer>
          <HeaderLink onClick={() => history.goBack()}>
            <img src={prev} alt="이전 페이지 버튼" />
          </HeaderLink>
          <HeaderLink>
            <img src={more} alt="더보기 버튼" onClick={isNavDialog} />
          </HeaderLink>
        </HeaderContainer>
      </HeaderLayOut>
      <LayOut>
        {/* 유저 프로필 */}
        <ProfileContainer />
        {/* 상품 */}
        <ProductContainer />
        {/* 게시글 */}
        <GalleryContainer />
      </LayOut>
      <Navigation />
      <Modal visible={navDialog}>
        <AlertBtn isAlert={isNavAlert}>로그아웃</AlertBtn>
        <ListBtn isDialog={isNavDialog}>닫기</ListBtn>
      </Modal>
      {/* Nav Alert */}
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBox isAlert={isNavAlert}>예</AlertBox>
        <AlertBox isAlert={isNavAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

const HeaderLayOut = styled.header`
  position: sticky;
  width: 100%;
  height: 47.5px;
  min-width: 390px;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;
const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;
const HeaderLink = styled.div`
  width: 22px;
  height: 22px;
  border: none;
  /* margin-right: 10px; */
  cursor: pointer;
`;
const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette["bg"]};
`;

export default MyProfile;
