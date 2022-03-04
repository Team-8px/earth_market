import React from "react";
import { Link } from "react-router-dom";
import { LoginSection, LoginLogoImg, LoginBtn } from "./index.style";


const LoginCard = () => {
  return (
    <>
      <LoginSection>
        {/* <LoginLogoImg/> */}
        <Link to={"/login"}>
          <LoginBtn outline="outline">이메일로 로그인</LoginBtn>
        </Link>
        <Link to={"/join"}>
          <LoginBtn outline="outline">회원가입</LoginBtn>
        </Link>
      </LoginSection>
    </>
  );
};

export default LoginCard;
