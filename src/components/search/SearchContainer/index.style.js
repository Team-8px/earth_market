import styled from "styled-components";

export const SearchSection = styled.main`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: calc(100% - 108px);
  padding: 30px 16px 20px;
  overflow-y: scroll;
  /* min-width: 100%; */

`;

export const SearchUserList = styled.ul`
  max-width: 390px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 70px;
`;
