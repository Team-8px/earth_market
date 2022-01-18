import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../actions/userActions";

// 스타일 컴포넌트

//import { Main, MainLayOut } from "../../../components/MainLayOut";
//import { MainTitle } from "../../../components/MainTitle";
import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form";

const LoginEmail = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email, password } = data;

    dispatch(login(email, password));
  };

  return (
    <>
      {/* 로그인부분 MainLayOut로 교체 예상, MainLayOut에서 export가 안된다고 해서 <></> 처리했어요 현길*/}
      <div>로그인</div>
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
        <Button>로그인</Button>
      </form>
    </>
  );
};

export default LoginEmail;
