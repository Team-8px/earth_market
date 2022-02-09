import React, { useState } from "react";
import styled from "styled-components";
import Header from "../common/Header";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
import { Alert, AlertBox } from "../../module/alert/Alert";
import Chat from "../../module/chat/Chat";
import Navigation from "../common/Navigation";

const ChatList = () => {
  // 🕹 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);
  return (
    <>
      <Header />
      <LayOut>
        <Chat></Chat>
      </LayOut>
      <Navigation />
      {/* <Comment></Comment> */}
      <button onClick={isNavDialog}>isNavDialog버튼</button>
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
    </>
  );
};
const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 24px 16px;
  overflow-y: scroll;
`;
const List = styled.div``;

export default ChatList;
