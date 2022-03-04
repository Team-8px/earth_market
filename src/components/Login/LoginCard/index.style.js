import styled from "styled-components";
// import MarketLogo from "../../asset/symbol-logo-W.png";

export const LoginSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginBtn = styled.button`
  width: 322px;
  height: 44px;
  background: ${props => props.theme.palette["white"]};
  color: ${props => props.theme.palette["black"]};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 44px;
  margin-top: 10px;
`;
