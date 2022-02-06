import React from "react";
import styled from "styled-components";
import { Button } from "../../module/button/button";

const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
`;

export default function JoinEmail() {
  return (
    <>
      <LayOut>
        {/* <LoginTitle></LoginTitle> */}
        {/* <LoginForm></LoginForm> */}
        <Button width="322px" size="lg" off>
          다음
        </Button>
      </LayOut>
    </>
  );
}
