/* 이부분은 어떤걸 임포트 하는지 모르겠네요 제 코드랑 충돌되는 영역이 아닌것 같은데 이상하네요 현길*/

import React from "react";
import MarketLogo from "../../../asset/symbol-logo-W.png";
//스타일 컴포넌트
import { IconButton } from "../../../components/Button";
import { MainContainer, MainLayOut, Logo } from "./index.style";
import styled from "styled-components";

const LoginMain = () => {
  return (
    <MainLayOut>
      <Logo>
        <h1>
          <img src={MarketLogo} alt="감귤마켓" />
        </h1>
      </Logo>
      <MainContainer>
        <IconButton size="lg" width="344px" color="orange">
          카카오 계정으로 로그인
        </IconButton>
        <IconButton size="lg" width="344px" color="orange">
          구글 계정으로 로그인
        </IconButton>
        <IconButton size="lg" width="344px" color="orange">
          페이스북 계정으로 로그인
        </IconButton>
        {/* 미진님 email & register Component 추가해야 하는 곳*/}
        <LoginEmailWrap>
          <LoginEmailTxt>이메일로 로그인</LoginEmailTxt>
          <LoginEmailTxt>회원가입</LoginEmailTxt>
        </LoginEmailWrap>
      </MainContainer>
    </MainLayOut>
  );
};

const LoginEmailWrap = styled.div`
  display: flex;
`;

const LoginEmailTxt = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  text-align: center;
  margin-top: 10px;

  &:nth-child(1)::after {
    content: "";
    font-size: 10px;
    margin: 10px;
    border-right: 1px solid #c4c4c4;
  }
`;

export default LoginMain;
