import React from "react";
import { Button } from "../../../components/Button";
import { AuthMainLayOut } from "../../../components/MainLayOut";
import { MainTitle } from "../../../components/MainTitle";
const JoinMemberShip = () => {
  return (
    <>
      <AuthMainLayOut>
        <MainTitle>이메일로 회원가입</MainTitle>
        {/* 지수님 Form Component */}
        <Button>다음</Button>
      </AuthMainLayOut>
    </>
  );
};

export default JoinMemberShip;
