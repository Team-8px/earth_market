import React from "react";
import { HeaderHome } from "../../../components/Header";

//스타일 컴포넌트
import { MainLayOut, NoneFeed } from "./index.style";

const HomeMain = () => {
  return (
    // 레이아웃 속성 확인하기
    <MainLayOut>
    <HeaderHome />
    <NoneFeed>
      <p>유저를 검색해 팔로우 해보세요!</p>
    </NoneFeed>
  </MainLayOut>
  );
};

export default HomeMain;
