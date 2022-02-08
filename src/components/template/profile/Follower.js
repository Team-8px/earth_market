import React from "react";
import styled from "styled-components";
import FollowersUser from "../../module/user/FollowersUser";
const Follower = () => {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>
        {/* <List> */}
        <FollowersUser></FollowersUser>
        {/* </List> */}
      </LayOut>
      {/* <Navigation></Navigation> */}
    </>
  );
};

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;
const List = styled.div``;

export default Follower;