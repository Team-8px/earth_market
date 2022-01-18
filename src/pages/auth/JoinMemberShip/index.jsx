import React from "react";
import { Button } from "../../../components/Button";
import { Main } from "../../../components/MainLayOut";
import { MainTitle } from "../../../components/MainTitle";
import { FormContainer } from "../../../components/Form";
const JoinMemberShip = () => {
  return (
    <>
      <Main>
        <MainTitle>이메일로 회원가입</MainTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <div>
          <label>이메일</label>
          <input
            name="email"
            type="email"
            placeholder="이메일 주소를 입력해 주세요."
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
            placeholder="비밀번호를 설정해 주세요."
            {...register("password")}
          />
        </div>
      </FormContainer>
      </form>
        <Button>다음</Button>
      </Main>
    </>
  );
};

export default JoinMemberShip;
