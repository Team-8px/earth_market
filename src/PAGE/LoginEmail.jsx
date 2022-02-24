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
  const { register, handleSubmit, watch, formState: { errors, isValid }} = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = watch(({ email, password }) => {
      if (email && password) {
        // 예시입니다
        setIsButtonStatus("123456" === password);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MainFieldSet>
          <LoginTitle>로그인</LoginTitle>
          <InputWrapper>
            <label>
              이메일
              <input 
              name="email" 
              type="text" 
              autoComplete="off" 
              spellCheck="false" 
              {...register("email", {validate:(value) => value === watch("email")})}
              />
            </label>
            <label>
              비밀번호
              <input
                name="password"
                type="password"
                {...register("password", {validate:(value) => value === watch("password")})}
              />
            </label>
            {errors.password && errors.password.type === "validate" && (<p>*이메일 또는 비밀번호가 일치하지 않습니다. </p>)}
          </InputWrapper>
          <Button type="submit" width="322px" size="lg" isValid={isValid}>
            로그인
          </Button>
          <LoginText to="/join/email">이메일로 회원가입</LoginText>
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
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["black"]};
    padding: 10px 0 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    color: ${props => props.theme.palette["main"]};
    caret-color: ${props => props.theme.palette["main"]};

    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
  }
  p{
    color: #EB5757;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
    }
`;

const LoginText = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.palette["subText"]};
  margin-top: 20px;
  cursor: pointer;

  &:first-child::after {
    content: "";
    font-size: 10px;
    margin: 10px;
    border-right: 1px solid ${props => props.theme.palette["lightGray"]};
  }
`;

const InputButton = styled.div`
  position: relative;

  input {
  width: 322px;
  height: 44px;
  border-radius: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: ${props => props.theme.palette["main"]};
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  }
`;

export default LoginEmail;