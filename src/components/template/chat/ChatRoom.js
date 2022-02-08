import React from "react";
import styled from "styled-components";
import Chat from "../../module/chat/Chat";

<<<<<<< HEAD
export default function ChatRoom() {
  return (
    // <Header></Header>
    // <LayOut>
    <Chat></Chat>
    // </LayOut>
    // <Comment></Comment> */
  );
}
=======
const ChatRoom = () => {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>{/* <Chat></Chat> */}</LayOut>
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
>>>>>>> f8c65edb0caa6a558d961afea2df603f98fdb76c
