import React from "react";
import styled from "styled-components";
import { Button } from "../../module/button/button";
import RegisterForm from "../../module/form/RegisterForm";
const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
`;

export default function JoinEmail() {
  return (
    <>
      <LayOut>
        {/* <LoginTitle></LoginTitle> */}
        <RegisterForm></RegisterForm>
        <Button width="322px" size="lg" off>
          다음
        </Button>
      </LayOut>
    </>
  );
}
