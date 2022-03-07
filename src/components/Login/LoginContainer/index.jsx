import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginCard from "../LoginCard";
import SplashCard from "../SplashCard";
import { LoginContainerSection, LoginContainerWrapper } from "./index.style.js";

function LoginContainer() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))?.user?.token) {
      history.push("/home");
    }
    // 로그인 상태일 경우 home 으로 가라
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <LoginContainerSection>
      <LoginContainerWrapper>
        <SplashCard loading={loading} />
        <LoginCard loading={loading} />
      </LoginContainerWrapper>
    </LoginContainerSection>
  );
}
export default LoginContainer;
