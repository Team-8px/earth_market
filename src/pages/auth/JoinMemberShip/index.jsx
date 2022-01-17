import React from "react";
import { Button } from "../../../components/Button";
import { AuthLayOut } from "../../../components/MainLayOut";
import { MainTitle } from "../../../components/MainTitle";
const JoinMemberShip = () => {
  return (
    <>
      <AuthLayOut>
        <MainTitle>이메일로 회원가입</MainTitle>
        {/* 지수님 Form Component */}
        <Button>다음</Button>
      </AuthLayOut>
    </>
  );
};

export default JoinMemberShip;
