import React from "react";
import {
  StyledMain,
  MainContainer,
  Logo,
  KakaoBtn,
  GoogleBtn,
  FaceBookBtn,
} from "./index.style";
import MarketLogo from "../../../asset/symbol-logo-W.png"
const LoginMain = () => {
  return (
    <StyledMain>
      <Logo>
        <h1>
          <img src={MarketLogo} alt="감귤마켓" />
        </h1>
      </Logo>
      <MainContainer>
        <KakaoBtn>카카오 계정으로 로그인</KakaoBtn>
        <GoogleBtn>구글 계정으로 로그인</GoogleBtn>
        <FaceBookBtn>페이스북 계정으로 로그인</FaceBookBtn>
        {/* 미진님 email & register Component 추가해야 하는 곳*/}
      </MainContainer>
    </StyledMain>
  );
};

export default LoginMain;
