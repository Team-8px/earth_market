import React from "react";
import styled from "styled-components";
import faceBook from "../../../asset/facebook.png";
// import kakao from "../../../asset/kakao.png";
import google from "../../../asset/google.png";
import { IconButton } from "../../module/button/Button";
import LoginLogo from "../../module/logo/LoginLogo";

const LoginMain = () => {
  return (
    <>
      <LayOut>
        <LoginLogo></LoginLogo>
        <Container>
          <IconButton
            width="322px"
            size="lg"
            border="kakao"
            outline
            icon={google}
          >
            카카오톡 계정으로 로그인
          </IconButton>
          <IconButton
            width="322px"
            size="lg"
            border="google"
            outline
            // icon={google} 카카오 파일 어디갔지..?
          >
            구글 계정으로 로그인
          </IconButton>
          <IconButton
            width="322px"
            size="lg"
            border="faceBook"
            outline
            icon={faceBook}
          >
            페이스북 계정으로 로그인
          </IconButton>
          {/* <LoginText></LoginText> */}
        </Container>
      </LayOut>
    </>
  );
};
const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn};
  width: 100%;
  height: 100%;
  padding-top: 180px;
  background-color: ${props => props.theme.palette.main};
`;
const Container = styled.div`
  ${props => props.theme.common.flexCenterColumn};
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.palette.bg};
  padding: 50px 0 82px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${props => props.theme.palette.subText};
`;

export default LoginMain;
