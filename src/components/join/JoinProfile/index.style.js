import styled from "styled-components";
import Upload from "../../../asset/upload-file.svg";

export const JoinProfileForm = styled.form`
  box-sizing: border-box;
  margin-top: 30px;
`;

export const JoinProfileTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.palette["subText"]};
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
`;

export const JoinProfileFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const InputWrapper = styled.div`
  width: 322px;
  margin-top: 40px;
  `;

export const JoinProfileLabel = styled.label`
  display: block;
  color: ${props => props.theme.palette["subText"]};
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const JoinProfileInput = styled.input`
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

export const JoinImgLabel = styled.label`
  position: relative;
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  cursor: pointer;
  &::after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      width: 36px;
      height: 36px;
      background: ${props => props.theme.palette["lightGray"]} url(${Upload})
        no-repeat center / 36px 36px;
      border-radius: 50%;
    }
`;

export const JoinImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;

export const JoinImgInput = styled.input`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  padding: 0;
`;

export const JoinButton = styled.button`
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
