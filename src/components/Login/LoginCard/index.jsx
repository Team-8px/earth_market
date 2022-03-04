import React from "react";
import { Link } from "react-router-dom";
import { LoginSection, LoginBtn } from "./index.style";

const LoginCard = ({ loading }) => {
  return (
    <>
      <LoginSection className={loading ? "" : "up"}>
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
