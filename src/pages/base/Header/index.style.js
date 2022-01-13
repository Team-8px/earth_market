import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  min-width: 390px;
  width: 100%;
  background-color: #fff;
  z-index: 10;
  background-color: #345;
`;

export const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid var(--border-color);
  justify-content: space-between;
`;
