import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import Chat from "../../module/chat/Chat";

const ChatList = () => {
  return (
    <>
      <Header />
      <LayOut>
        <Chat></Chat>
      </LayOut>
      {/* <Comment></Comment> */}
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
