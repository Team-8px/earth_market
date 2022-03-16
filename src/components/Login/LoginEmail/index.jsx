import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/userActions";
import {
  LoginEmailForm,
  LoginEmailTitle,
  LoginEmailFieldSet,
  LoginEmailLabel,
  LoginEmailInput,
  ErrorMessage,
  LoginButton,
  LoginText,
} from "./index.style";

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
  // getValue 없애면 에러 사라짐
  // notMatchError만 넣으면 에러 사라짐

  const onSubmit = data => {
    const { email, password } = data;
    if (isValid) {
      dispatch(login(email, password, setNotMatchError));
    }
  };

  return (
    <LoginEmailForm onSubmit={handleSubmit(onSubmit)}>
      <LoginEmailTitle>로그인</LoginEmailTitle>
      <LoginEmailFieldSet>
        <LoginEmailLabel htmlFor="email">
          이메일
          <LoginEmailInput
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
            <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
          )}
          {errors.email?.type === "pattern" && (
            <ErrorMessage>*올바르지 않은 이메일 형식입니다.</ErrorMessage>
          )}
        </LoginEmailLabel>
        <LoginEmailLabel>
          비밀번호
          <LoginEmailInput
            name="password"
            type="password"
            spellCheck="false"
            placeholder="비밀번호를 설정해 주세요."
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors?.password?.type === "required" && (
            <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
          )}
          {errors.password?.type === "minLength" && (
            <ErrorMessage>*비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
          )}
          {notMatchError && <ErrorMessage>{notMatchError}</ErrorMessage>}
        </LoginEmailLabel>
        <LoginButton
          disabled={!isValid}
        >
          로그인
        </LoginButton>
        <LoginText to="/join">이메일로 회원가입</LoginText>
      </LoginEmailFieldSet>
    </LoginEmailForm>
  );
};

export default LoginEmail;
