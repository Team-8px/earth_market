import styled from "styled-components";

export const LoginLayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn};
  width: 100%;
  height: 100%;
  padding-top: 180px;
  background-color: ${props => props.theme.palette.main};
`;

export const LoginLogo = styled.div`
  width: 144px;
  height: 144px;
`;

export const LoginBtn = styled.button.attrs({type:"submit"})`
  width: 322px;
  height: 44px;
  background: ${props => props.theme.palette["white"]};
  color: ${props => props.theme.palette["black"]};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 44px;
  margin-bottom: 10px;
`;
