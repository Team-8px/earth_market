import React from "react";

const LayOut = styled.div``;
const List = styled.div``;

export default function ChatList() {
  return (
    <>
      <Header></Header>
      <LayOut>
        <List>
          <ChatListUser></ChatListUser>
        </List>
      </LayOut>
    </>
  );
}
