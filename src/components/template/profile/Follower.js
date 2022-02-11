import React from "react";
import styled from "styled-components";
import { HeaderFollow } from "../common/Header";
// 팔로우 유저 모듈에서 List,Item 불러와야함
import Navigation from "../common/Navigation";

const Follower = () => {
  return (
    <>
      <HeaderFollow />
      <LayOut></LayOut>
      <Navigation />
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
