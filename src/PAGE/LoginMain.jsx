import React from "react";

const LoginMain = () => {
  return (
    <>
      <h1>로그인 메인</h1>
      {isLoading ? <SplashScreen /> : <로그인메인화면 />}
    </>
  );
};

export default LoginMain;
