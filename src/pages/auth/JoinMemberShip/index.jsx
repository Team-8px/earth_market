import React from "react";
import { Button } from "./index.style";
import { MainLayOut } from "../../../components/MainLayOut";
import { MainTitle } from "../../../components/MainTitle";

const JoinMemberShip = () => {
  return (
    <>
      <MainLayOut>
        <MainTitle>이메일로 회원가입</MainTitle>
        {/* 지수님 Form Component */}
        <Button>다음</Button>
      </MainLayOut>
    </>
  );
};

export default JoinMemberShip;
