import React from "react";
import { HeaderHome } from "../../../components/Header";

//스타일 컴포넌트
import { MainLayOut } from "./index.style";

const HomeMain = () => {
  return (
    // 레이아웃 속성 확인하기
    <MainLayOut>
    <HeaderHome />
    HomeMain
  </MainLayOut>
  );
};

export default HomeMain;
