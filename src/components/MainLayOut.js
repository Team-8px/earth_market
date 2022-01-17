import styled, { css } from "styled-components";

const AlignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLayOut = css`
  min-width: 390px;
  width: 100%;
  height: 100%;
  margin-top: 48px;
`;

// Auth 페이지 레이아웃

export const AuthMainLayOut = styled.main`
  ${AlignCenter}
`;

export const Main = styled.div`
  ${AlignCenter}
`;
// home 페이지 레이아웃

export const HomeMainLayOut = styled.main`
  ${AlignCenter}
  position: fixed;
  padding: 20px 16px 0;
  margin-top: 48px;
  height: calc(100% - 108px);
  min-width: 100%;
  overflow-y: scroll;
`;

// Chat 페이지 레이아웃

export const ChatMainLayOut = styled.main`
  ${MainLayOut}
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 24px 16px;
  overflow-y: scroll;
`;

// profile 페이지 레이아웃
export const FolloMainLayOut = styled.main`
  ${MainLayOut}
`;

// product 페이지 레이아웃

export const ProductMainLayOut = styled.main`
  // 크기
  ${MainLayOut}
  // 포지션
  justify-content: center;
  flex-direction: row;
  align-items: stretch;
`;
