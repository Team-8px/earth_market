import styled from "styled-components";
import ImgIcon from "../../../asset/upload-file.svg";

export const Form = styled.form`
  box-sizing: border-box;
  margin: 30px auto;
  max-width: 322px;
  width: 100%;
`;

export const ProfileImgWrapper = styled.div`
  margin-bottom: 30px;
  label {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    margin: 0 auto;
    border: 1px solid ${props => props.theme.palette["border"]};
    border-radius: 50%;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      width: 36px;
      height: 36px;
      background: ${props => props.theme.palette["lightGray"]} url(${ImgIcon})
        no-repeat center / 36px 36px;
      border-radius: 50%;
    }

    img {
      width: 110px;
      height: 110px;
    }

    input {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
      padding: 0;
    }
  }
`;

export const ProductFormWrapper = styled.div`
  margin: 0 auto 16px;

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
    color: #eb5757;
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
      no-repeat center / 36px 36px;
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
  background: ${props => props.theme.palette["main"]};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  z-index: 150;
  :disabled {
    background: ${props => props.theme.palette["lightMain"]};
  }
  /* cursor: ${props => (props.disabled === true ? "default" : "pointer")}; */
`;
