import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../actions/userActions";

// 스타일 컴포넌트

import { MainLayOut, Title, Btn } from "./index.style";
/* import {
  Main,
  FormContainer,
  InPutContainer,
  Button,
  JoinEmailBtn,
} from "./index.style"; */

const LoginEmail = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email, password } = data;

    dispatch(login(email, password));
  };

  return (
    <MainLayOut>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            {...register("email")}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
      <Btn>로그인</Btn>
    </MainLayOut>
  );
};

export default LoginEmail;
