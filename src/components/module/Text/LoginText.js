import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginTextWrap = styled.div`
  display: flex;
`;

const LoginTxt = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  text-align: center;
  margin-top: 10px;

  &:first-child::after {
    content: "";
    font-size: 10px;
    margin: 10px;
    border-right: 1px solid #c4c4c4;
  }
`;

export default function LoginText() {
  return (
    <LoginTextWrap>
      <LoginTxt to="/login">이메일로 로그인</LoginTxt>
      <LoginTxt to="/join/email">회원가입</LoginTxt>
    </LoginTextWrap>
  );
}
