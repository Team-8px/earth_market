import React from "react";
import styled from "styled-components";
import { HeaderFollow } from "../common/Header";
import Chat from "../../module/chat/Chat";

const ChatRoom = () => {
  return (
    <>
      <HeaderFollow />
      <LayOut>
        <Chat></Chat>
      </LayOut>
      {/* <Comment></Comment> */}
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
