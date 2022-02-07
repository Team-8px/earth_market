import styled from "styled-components";

/* import { LoginEmailMainLayOut } from "../../../components/MainLayOut"; */
import { MainTitle } from "../../../components/MainTitle";
// import { Button } from "../../../components/Button";

export const MainLayOut = styled(LoginEmailMainLayOut)``;
export const Title = styled(MainTitle)``;
// export const Btn = styled(Button)``;
// 공통요소
export const FormContainer = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;

  label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }
`;

export const JoinEmailBtn = styled.a``;
