import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../actions/userActions";
import styled from "styled-components";
import { Button } from "../components/module/button/button";
import LoginTitle from "../components/module/title/LoginTitle";

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
          <EmailWrapper>
            <label>이메일</label>
            <input name="email" type="email" {...register("email")} />
          </EmailWrapper>
          <PwWrapper>
            <label>비밀번호</label>
            <input name="password" type="password" {...register("password")} />
          </PwWrapper>
          <Button width="322px" size="lg" isButtonStatus={isButtonStatus}>
            로그인
          </Button>
        </MainFieldSet>
      </Form>
    </>
  );
};

const Form = styled.form`
  box-sizing: border-box;
`;
//  메인
const MainFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//  헤더
const HeaderFieldSet = styled.fieldset``;

const EmailWrapper = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;

  label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: #dbdbdb;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }
`;

const PwWrapper = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;

  label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: #dbdbdb;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }
`;

export default LoginEmail;
