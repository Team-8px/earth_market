import React from "react";
import styled from "styled-components";
import { Button } from "../../module/button/Button";
import RegisterForm from "../../module/form/RegisterForm";

const JoinEmail = () => {
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
};

const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
`;

export default JoinEmail;
