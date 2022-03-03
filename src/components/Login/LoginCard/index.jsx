import React from "react";
import { Link } from "react-router-dom";
import { LoginLayOut, LoginLogo, LoginBtn } from "./index.style";
import MarketLogo from "../../asset/symbol-logo-W.png";

const LoginScreen = () => {
  return (
    <>
      <LoginLayOut>
        <LoginLogo src={MarketLogo} alt="어스마켓" />
        <Link to={"/login"}>
          <LoginBtn outline="outline">이메일로 로그인</LoginBtn>
        </Link>
        <Link to={"/join"}>
          <LoginBtn outline="outline">회원가입</LoginBtn>
        </Link>
      </LoginLayOut>
    </>
  );
};

export default LoginScreen;
