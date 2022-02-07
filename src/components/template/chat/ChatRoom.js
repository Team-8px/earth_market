import React from "react";
import styled from "styled-components";

const LayOut = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 16px;
  min-height: 100%;
`;
export default function ChatRoom() {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>{/* <Chat></Chat> */}</LayOut>
      {/* <Comment></Comment> */}
    </>
  );
}
