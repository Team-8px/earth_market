import React from "react";
import styled from "styled-components";

export default function ChatList() {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>
        {/* <List> */}
        {/* <ChatListUser></ChatListUser> */}
        {/* </List> */}
      </LayOut>
    </>
  );
}
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
