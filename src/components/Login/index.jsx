import React, { useEffect } from "react";
import {LoginLayOut, LoginLogo, LoginBtn} from "./index.style";
// import MarketLogo from "../../../asset/symbol-logo-W.png";

const LoginMain = () => {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))?.user?.token) {
      document.location.href = "/home";
    }
  }, []);

  return (
    <> 
    <LoginLayOut>
      {/* <LoginLogo>
        <img src={MarketLogo} alt="감귤마켓" />
      </LoginLogo> */}
        <LoginBtn
          border="kakao"
          outline="outline">
          이메일로 로그인
        </LoginBtn>
        <LoginBtn 
          border="google" 
          outline="outline">
          회원가입
        </LoginBtn>
    </LoginLayOut>
    </>
  );
};

export default LoginMain;