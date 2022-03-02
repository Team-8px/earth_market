import styled from "styled-components";

export const SearchSection = styled.main`
  position: fixed;
  display: flex;
  justify-content: center;
  height: calc(100% - 108px);
  padding: 20px 16px;
  overflow-y: scroll;
  min-width: 100%;
  margin-top: 48px;
`;

export const SerachUserList = styled.ul`
  max-width: 390px;
  width: 100%;
  box-sizing: border-box;
`;
