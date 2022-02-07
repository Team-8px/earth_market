import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../module/button/button";
import LoginTitle from "../../module/title/LoginTitle";
import LoginForm from "../../module/form/LoginForm";

const LoginEmail = () => {
  return (
    <>
      <LayOut>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm></LoginForm>
        <Button width="322px" size="lg" off>
          로그인
        </Button>
        {/* <EmailText></EmailText> */}
      </LayOut>
    </>
  );
};

const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
`;

export default LoginEmail;
