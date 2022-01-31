import React from "react";
import { Button } from "../../../components/Button";
import { HeaderHome } from "../../../components/Header";

//스타일 컴포넌트
import { MainLayOut} from "./index.style";
import { NoneFeed } from "../../../components/NoneFeed";
import Navigation from "../../../components/Navigation";
const HomeMain = () => {
  return (
    // 레이아웃 속성 확인하기
    <>
      <HeaderHome />
      <MainLayOut>
        <NoneFeed>
          <p>유저를 검색해 팔로우 해보세요!</p>
          <Button size="lg" width="120px">
            검색하기
          </Button>
        </NoneFeed>
      </MainLayOut>
      <Navigation />
    </>
  );
};

export default HomeMain;
