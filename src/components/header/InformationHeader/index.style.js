import styled from "styled-components";

export const InformationLayOut = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 48px;
  top: 0;
  background-color: #fff;
  z-index: 10;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const PrevBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  cursor: pointer;
`;

export const HeaderTitle = styled.h2`
  margin-left: 8px;
  font-size: 18px;
`;
