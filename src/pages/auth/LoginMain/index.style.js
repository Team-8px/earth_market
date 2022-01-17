import styled from "styled-components";

// 페이지 전체 레이아웃
export const LoginMainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 180px;
  background-color: #ea7f42;
`;

// 페이지 하단 컨테이너
export const LoginMainContainer = styled.section`
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
  color: var(--sub-txt-color);
`;
