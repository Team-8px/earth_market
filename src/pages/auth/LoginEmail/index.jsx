import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../actions/userActions";
import {
  Main,
  FormContainer,
  InPutContainer,
  Button,
  JoinEmailBtn,
  InputLabel,
  InputValue,
} from "./index.style";

const LoginEmail = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password } = data;

    dispatch(login(email, password));
  };

  return (
    <Main>
      
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
        <input type="submit"/>
      </div>
    </form>
    <Button>
    <button type="button">로그인</button>
    </Button>
    </Main>
  );
};

export default LoginEmail;
