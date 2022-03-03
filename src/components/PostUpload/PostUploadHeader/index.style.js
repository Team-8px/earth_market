import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  max-width: 100%;
  padding: 0 16px;
  background: #fff;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const PreBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
`;
