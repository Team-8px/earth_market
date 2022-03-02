import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import PostViewContainer from "../components/PostView/PostViewContainer";
import { Modal, AlertBtn, ListBtn } from "../components/module/modal/Modal";
import { Alert, AlertBox } from "../components/module/alert/Alert";
import prev from "../asset/icon-arrow-left.svg";
import more from "../asset/icon-more-vertical.svg";

const PostView = () => {
  const { postId } = useParams();
  const history = useHistory();
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  return (
    <>
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
      <PostViewContainer postId={postId} />
      <Modal visible={navDialog}>
        <AlertBtn isAlert={isNavAlert}>로그아웃</AlertBtn>
        <ListBtn isDialog={isNavDialog}>닫기</ListBtn>
      </Modal>
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBox isAlert={isNavAlert}>네</AlertBox>
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
  cursor: pointer;
`;

export default PostView;
