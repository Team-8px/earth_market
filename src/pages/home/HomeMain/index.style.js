import styled from "styled-components";

export const Main = styled.main`
  // 공통요소
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 0;
  margin-top: 48px;
  height: calc(100% - 108px);
  min-width: 100%;
  overflow-y: scroll;

  /* 임시 스타일*/
`;

export const NoneFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
