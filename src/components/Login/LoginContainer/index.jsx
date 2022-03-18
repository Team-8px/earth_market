import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginCard from "../LoginCard";
import SplashCard from "../SplashCard";
import { LoginContainerSection } from "./index.style.js";

function LoginContainer() {
  const [loading, setLoading] = useState(false);
  const [visible, setvisible] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))?.user?.token) {
      history.push("/home");
      setvisible(false);
    }
  }, [history]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <LoginContainerSection>
          <SplashCard loading={loading} />
          <LoginCard loading={loading} />
        </LoginContainerSection>
      )}
    </>
  );
}
export default LoginContainer;
