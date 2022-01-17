import React from "react";
import { MainTitle, Button } from "./index.style";
import { MainLayOut } from "../../../components/MainLayOut";

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
