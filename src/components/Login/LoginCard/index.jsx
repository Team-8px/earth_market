import React from "react";
import { useHistory } from "react-router-dom";
import { LoginList, LoginBtn, LoginItem } from "./index.style";
import emailLogin from "../../../asset/icon/icon-email.svg";
import signUp from "../../../asset/icon/icon-login.svg";


const LoginCard = ({ loading }) => {
  const history = useHistory();
  return (
    <>
      <LoginList className={loading ? "" : "up"}>
        <LoginItem>
          <LoginBtn icon={emailLogin} onClick = {() => history.push("/login")}> 이메일로 로그인 </LoginBtn>
        </LoginItem>
        <LoginItem>
          <LoginBtn icon={signUp} onClick = {() => history.push("/join")}> 회원가입 </LoginBtn>
        </LoginItem>
      </LoginList>
    </>
  );
};

export default LoginCard;
