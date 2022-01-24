import React from "react";
import { Button } from "../../../components/Button";
import { HeaderHome } from "../../../components/Header";
import { MainLayOut, NoneFeed } from "./index.style";
const HomeMain = () => {
  return (
    // 레이아웃 속성 확인하기
    <MainLayOut>
      <HeaderHome />
      <NoneFeed>
        <p>유저를 검색해 팔로우 해보세요!</p>
        <Button size="lg" width="120px">
          검색하기
        </Button>
      </NoneFeed>
    </MainLayOut>
  );
};

export default HomeMain;
