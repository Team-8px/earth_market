import styled, { css } from "styled-components";

const AlignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthLayOut = styled.main`
  ${AlignCenter}
`;

export const Main = styled.div`
  ${AlignCenter}
`;

export const MainLayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  // 테스트용 백그라운드
  // Defalut #fff
  margin-top: 48px;
`;

// 레이아웃 한곳으로 다 모아버리기
