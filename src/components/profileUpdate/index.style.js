import styled from "styled-components";
import Upload from "../../asset/upload-file.svg";

export const Form = styled.form`
  box-sizing: border-box;
  margin: 30px auto;
  max-width: 322px;
  width: 100%;
`;

export const ProfileImgWrapper = styled.fieldset`
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
      background: ${props => props.theme.palette["lightGray"]} url(${Upload})
        no-repeat center / 36px 36px;
      border-radius: 50%;
    }

    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
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
export const ProductFormWrapper = styled.fieldset`
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
`;
