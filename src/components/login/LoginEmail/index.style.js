import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginEmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 30px;
`;

export const LoginEmailTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
`;

export const LoginEmailFieldSet = styled.fieldset`
  width: 322px;
  margin-top: 40px;
`;

export const LoginEmailLabel = styled.label`
  display: block;
  color: ${props => props.theme.palette["subText"]};
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const LoginEmailInput = styled.input`
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["black"]};
    padding: 10px 0 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    color: ${props => props.theme.palette["main"]};
    caret-color: ${props => props.theme.palette["main"]};
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
`;

export const ErrorMessage = styled.strong`
  display: inline-block;
  color: ${props => props.theme.palette["waring"]};
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  margin-top: 6px;
`;

export const LoginButton = styled.button.attrs({
  type:"submit"
  })`
  width: 322px;
  height: 44px;
  margin-top: 14px;
  background: ${props => props.theme.palette["main"]};
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 44px;
  :disabled {
    background: ${props => props.theme.palette["lightMain"]};
  }
`;

export const LoginText = styled(Link)`
  display: block;
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.palette["subText"]};
  cursor: pointer;
`;