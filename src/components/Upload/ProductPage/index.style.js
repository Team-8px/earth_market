import styled from "styled-components";
import ImgIcon from "../../../asset/icon/icon-upload.png";

export const Form = styled.form`
  box-sizing: border-box;
`;

export const MainFieldSet = styled.fieldset`
  margin: 30px auto;
  max-width: 322px;
  width: 100%;
`;

export const ProductFormWrapper = styled.div`
  margin: 0 auto 30px;
  label {
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
    margin-top: 16px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    caret-color: ${props => props.theme.palette["main"]};
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
  }
  p {
    color: ${props => props.theme.palette["waring"]};
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 18px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 204px;
  background-color: ${props => props.theme.palette["bg"]};
  border: 0.5 solid ${props => props.theme.palette["border"]};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  img {
    background: no-repeat center / contain;
  }
  &::after {
    position: absolute;
    right: 12px;
    bottom: 12px;
    content: "";
    width: 36px;
    height: 36px;
    background: ${props => props.theme.palette["lightGray"]} url(${ImgIcon})
      no-repeat center / 22px 22px;
    border-radius: 50%;
  }
`;

export const UploadBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 90px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: ${props => props.theme.palette["lightMain"]};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  z-index: 150;
`;
