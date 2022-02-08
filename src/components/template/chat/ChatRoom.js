import React from "react";
import styled from "styled-components";
import { HeaderFollow } from "../common/Header";
import Chat from "../../module/chat/Chat";
import { CommentUser } from "../../module/user/CommentUser";

const ChatRoom = () => {
  return (
    <>
      <HeaderFollow />
      <LayOut>
        <Chat></Chat>
      </LayOut>
      <CommentUser buttonText={"전송"} />
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
