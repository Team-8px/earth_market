import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 스타일 로직
import { Button } from "../components/module/button/button";
import { Link } from "react-router-dom";
import LoginTitle from "../components/module/title/LoginTitle";

// 비즈니스 로직
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const LoginEmail = () => {
  const [isButtonStatus, setIsButtonStatus] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  useEffect(() => {
    const subscription = watch(({ email, password }) => {
      if (email && password) {
        setIsButtonStatus(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email, password } = data;

    dispatch(login(email, password));
  };

  return (
    <>
      {/* 💡 1. 첫번쨰로 form태그를 가장 최상위 태그로 만들었음 */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* 💡 2. 필드셋 설정 페이지의 레이아웃을 담당한다. */}
        <MainFieldSet>
          <LoginTitle>로그인</LoginTitle>
          <InputWrapper>
            <label>이메일
            <input name="email" type="email" autoComplete="off" {...register("email")} />
            </label>
            <label>비밀번호
            <input name="password" type="password" {...register("password")} />
            </label>
          </InputWrapper>
          <Button width="322px" size="lg" isButtonStatus={isButtonStatus}>
            로그인
          </Button>
          <LoginText to="/">이메일로 회원가입</LoginText>
        </MainFieldSet>
      </Form>
    </>
  );
};

const Form = styled.form`
  box-sizing: border-box;
  margin-top: 30px;
`;

//  메인
const MainFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 322px;
  margin: 40px 0 14px;

  label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  input {
    width: 100% ;
    font-size: 14px;
    color: ${props => props.theme.palette["black"]};
    /* line-height: 14px; */
    padding: 10px 0 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    caret-color: ${props => props.theme.palette["main"]};
  }
`;

const LoginText = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  margin-top: 20px;
  cursor: pointer;

  &:first-child::after {
    content: "";
    font-size: 10px;
    margin: 10px;
    border-right: 1px solid #c4c4c4;
  }
`;

export default LoginEmail;
