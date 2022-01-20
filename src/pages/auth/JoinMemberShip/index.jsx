import React from "react";
import { Button } from "../../../components/Button";
import { MainLayOut } from "./index.style";
import { MainTitle } from "../../../components/MainTitle";
import { FormContainer } from "../../../components/Form";
// 재영: 폼 컨테이너 에러인 것 같습니다.
// form컨테이너 안에있는 register가 사용되지 않고 있으며
// onSubmit 함수 역시 선언되어있지 않아서 에러가 발생했습니다
const JoinMemberShip = () => {
  return (
    <>
      <h1>이부분이 이상하다</h1>
      <MainLayOut>
        <MainTitle>이메일로 회원가입</MainTitle>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <FormContainer>
          <div>
            <label>이메일</label>
            <input
              name="email"
              type="email"
              placeholder="이메일 주소를 입력해 주세요."
              // {...register("email")}
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
              // {...register("password")}
            />
          </div>
        </FormContainer>
        {/* </form> */}
        <Button>다음</Button>
      </MainLayOut>
    </>
  );
};

export default JoinMemberShip;
