import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../actions/userActions";

// 스타일 컴포넌트

import styled from "styled-components";
import { MainTitle } from "../../../components/MainTitle";
// import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form";
import { MainLayOut } from "./index.style";

const LoginEmail = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email, password } = data;

    dispatch(login(email, password));
  };

  return (
    <MainLayOut>
      <MainTitle>로그인</MainTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <div>
            <label>이메일</label>
            <input
              name="email"
              type="email"
              placeholder="이메일"
              {...register("email")}
            />
          </div>
        </FormContainer>
        <FormContainer>
          <div>
            <label>비밀번호</label>
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
          </div>
        </FormContainer>
        {/*  <div>
        <input type="submit" />
      </div> */}
      </form>
      <LoginEmailTxt>이메일로 회원가입</LoginEmailTxt>
    </MainLayOut>
  );
};

const LoginEmailTxt = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  text-align: center;
  margin-top: 10px;
`;

export default LoginEmail;
