import React from "react";

const LayOut = styled.div``;
const List = styled.div``;

export default function Follower() {
  return (
    <>
      <Header></Header>
      <LayOut>
        <List>
          <FollowersUser></FollowersUser>
        </List>
      </LayOut>
      <Navigation></Navigation>
    </>
  );
}
