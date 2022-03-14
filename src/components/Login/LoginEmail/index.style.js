import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  box-sizing: border-box;
  margin-top: 30px;
`;

export const MainFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

export const InputWrapper = styled.div`
  width: 322px;
  margin: 40px 0 14px;

  label {
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  input {
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
  }
  p {
    color: #eb5757;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
  }
`;

export const LoginText = styled(Link)`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.palette["subText"]};
  margin-top: 20px;
  cursor: pointer;

  &:first-child::after {
    content: "";
    font-size: 10px;
    margin: 10px;
    border-right: 1px solid ${props => props.theme.palette["lightGray"]};
  }
`;

export const LoginButton = styled.button `
  width: 322px;
  height: 44px;
  background: ${props => props.theme.palette["main"]};
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 44px;
  :disabled {
    background: ${props => props.theme.palette["lightMain"]};
  }
`