import React, { useState } from "react";
import styled from "styled-components";
import { Modal, ListBtn } from "../../module/modal/Modal";
import Chat from "../../module/chat/Chat";

const ChatRoom = () => {
  // 🕹 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>
        <Chat></Chat>
      </LayOut>
      {/* <Comment></Comment> */}
      <button onClick={isNavDialog}>isNavDialog버튼</button>
      <Modal visible={navDialog}>
        <ListBtn isDialog={isNavDialog}>채팅방 나가기</ListBtn>
      </Modal>
    </>
  );
};
const LayOut = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 16px;
  min-height: 100%;
`;

export default ChatRoom;
