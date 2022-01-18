/* 이부분은 어떤걸 임포트 하는지 모르겠네요 제 코드랑 충돌되는 영역이 아닌것 같은데 이상하네요 현길*/

import React from "react";
import MarketLogo from "../../../asset/symbol-logo-W.png";
//스타일 컴포넌트
import { KakaoBtn, GoogleBtn, FaceBookBtn } from "../../../components/Button";
import { MainContainer, MainLayOut, Logo } from "./index.style";

const LoginMain = () => {
  return (
    <MainLayOut>
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
    </MainLayOut>
  );
};

export default LoginMain;
