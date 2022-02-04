import React from "react";
import styled from "styled-components";

const LayOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 180px;
  background-color: #ea7f42;
  background-color: #123;
`;
const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 50px 0 82px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #767676;
`;

export default function LoginMain() {
  return <div>LoginMain</div>;
  /* <LayOut>
        <LoginLogo></LoginLogo>
      </LayOut>
      <Container>
        <Button width="322px" border="kakao" size="lg">
          카카오톡 계정으로 로그인
        </Button>
        <Button></Button>
        <Button></Button>
        <LoginText></LoginText>
      </Container> */
}
