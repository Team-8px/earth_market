import React from "react";
import { MainTitle } from "../../../styles/FontStyle";

import { Main, FormContainer, InPutContainer, Button } from ".";

const SetMemberShip = () => {
  return (
    <Main>
      <MainTitle>프로필 설정</MainTitle>
      <FormContainer>
        <InPutContainer>사용자이름</InPutContainer>
        <InPutContainer>계정 ID</InPutContainer>
        <InPutContainer>소개</InPutContainer>
        <Button>감귤마켓 시작하기</Button>
      </FormContainer>
    </Main>
  );
};

export default SetMemberShip;
