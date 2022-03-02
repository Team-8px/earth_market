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
  const [notMatchError, setNotMatchError] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (notMatchError) {
      setNotMatchError("");
    }
  }, [getValues().password, getValues().email]);

  const onSubmit = data => {
    const { email, password } = data;
    if (isValid) {
      dispatch(login(email, password, setNotMatchError));
    }
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
                type="email"
                placeholder="이메일 주소를 입력해 주세요."
                autoComplete="off"
                spellCheck="false"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                })}
              />
              {errors?.email?.type === "required" && (
                <p>* 필수 입력사항입니다.</p>
              )}
              {errors.email?.type === "pattern" && (
                <p>*올바르지 않은 이메일 형식입니다.</p>
              )}
            </label>
            <label>
              비밀번호
              <input
                name="password"
                type="password"
                spellCheck="false"
                placeholder="비밀번호를 설정해 주세요."
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors?.password?.type === "required" && (
                <p>* 필수 입력사항입니다.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p>*비밀번호는 6자 이상이어야 합니다.</p>
              )}
              {notMatchError && <p>{notMatchError}</p>}
            </label>
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
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
  }
  p {
    color: #eb5757;
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
