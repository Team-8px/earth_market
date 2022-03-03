import styled from "styled-components";

export const LoginLayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn};
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: ${props => props.theme.palette.main};
`;

export const LoginLogo = styled.img`
  width: 144px;
  height: 144px;
  margin-bottom: 50px;
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
