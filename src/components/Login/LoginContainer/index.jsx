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
      window.location.href = "/home";
      // 이부분은 history.push(/home)으로 변경하면 에러가 발생합니다.
    }
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
