import styled from "styled-components";
import { LoginMainMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(LoginMainMainLayOut)``;

export const Logo = styled.div`
  width: 144px;
  height: 144px;
`;

export const Container = styled.section``;
// 페이지 하단 컨테이너
export const MainContainer = styled.section`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 50px 0 82px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #767676;
`;
