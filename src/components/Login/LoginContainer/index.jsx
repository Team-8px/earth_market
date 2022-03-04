import React, { useState, useEffect } from "react";
import LoginCard from "../LoginCard";
import SplashCard from "../SplashCard";
import { LoginContainerSection, LoginContainerWrapper } from "./index.style.js";

function LoginContainer() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))?.user?.token) {
      document.location.href = "/home";
    }
    // 로그인 상태일 경우 home 으로 가라
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <LoginContainerSection>
      <LoginContainerWrapper>
        <SplashCard />
        <LoginCard />
      </LoginContainerWrapper>
    </LoginContainerSection>
  );
}
export default LoginContainer;
