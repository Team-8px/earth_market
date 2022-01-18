import React from "react";

//스타일 컴포넌트
import { KakaoBtn, GoogleBtn, FaceBookBtn } from "../../../components/Button";
import { MainContainer, MainLayOut } from "./index.style";
const LoginMain = () => {
  return (
    <MainLayOut>
      <MainContainer>
        <KakaoBtn>카카오 계정으로 로그인</KakaoBtn>
        <GoogleBtn>구글 계정으로 로그인</GoogleBtn>
        <FaceBookBtn>페이스북 계정으로 로그인</FaceBookBtn>
        {/* 미진님 email & register Component 추가해야 하는 곳*/}
      </MainContainer>
    </MainLayOut>
  );
};

export default LoginMain;
