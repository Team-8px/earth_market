import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { login } from "../../../actions/userActions";
import { MainTitle } from "../../../components/MainTitle";
import { FormContainer } from "../../../components/Form";
/* 내용을 몰라서 주석처리 했어요 -현길- */
/* import { MainLayOut } from "../LoginEmail/index.style"; */
import UseGNBHook from "../../../hooks/useGNB";

const LoginEmail = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    const { email, password } = data;

    dispatch(login(email, password));
  };

  return (
    <div>
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
        <button>로그인</button>
      </form>

      <LoginEmailTxt>
        <Link to="/gh/join/email">이메일로 회원가입</Link>
      </LoginEmailTxt>
      <br />
      <br />
      <br />
      <UseGNBHook />
    </div>
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
