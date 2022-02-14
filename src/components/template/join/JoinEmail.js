import React from "react";
import styled from "styled-components";
import { Button } from "../components/module/button/button";
import RegisterForm from "../components/module/form/RegisterForm";
import LoginTitle from "../components/module/title/LoginTitle";

const JoinEmail = () => {
  return (
    <>
      <LayOut>
        <LoginTitle>이메일로 회원가입</LoginTitle>
        <RegisterForm></RegisterForm>
        <Button width="322px" size="lg" off>
          다음
        </Button>
      </LayOut>
    </>
  );
};

const LayOut = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default JoinEmail;
