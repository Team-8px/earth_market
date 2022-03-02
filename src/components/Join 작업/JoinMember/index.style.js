import styled from "styled-components";

export const JoinMemberForm = styled.form `
  box-sizing: border-box;
  margin-top: 30px;
`;

export const JoinMemberFieldset = styled.fieldset `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JoinMemberTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

export const JoinMemberInputWrapper = styled.div`
  width: 322px;
  margin: 40px 0 14px;
`;

export const JoinMemberLabel = styled.label`
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 16px;
    cursor: pointer;
`

export const JoinMemberInput = styled.input`
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding: 10px 0 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    caret-color: ${props => props.theme.palette["main"]};
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
`

export const ErrorMessage = styled.p`
  color: #eb5757;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;
`

export const JoinMemberBtn = styled.button.attrs({type:"submit"})`
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
`;
