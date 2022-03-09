import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/userActions";
import { 
  Form,
  MainFieldSet,
  LoginTitle,
  InputWrapper,
  LoginText,
  InputButton,
  LoginButton
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
          <LoginButton disabled={!isValid} type="submit" width="322px" size="lg" isValid={isValid}>
            로그인
          </LoginButton>
          <LoginText to="/join">이메일로 회원가입</LoginText>
        </MainFieldSet>
      </Form>
    </>
  );
};

export default LoginEmail;