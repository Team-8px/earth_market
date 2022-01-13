import React from "react";

import {
  Main,
  FormContainer,
  InPutContainer,
  Button,
  JoinEmailBtn,
} from "./index.style";

const JoinMemberShip = () => {
  return (
    <Main>
      <FormContainer>
        <InPutContainer>이메일</InPutContainer>
        <InPutContainer>비밀번호</InPutContainer>
        <Button>로그인</Button>
        <JoinEmailBtn>이메일로 회원가입</JoinEmailBtn>
      </FormContainer>
    </Main>
  );
};

export default JoinMemberShip;
