import React from "react";
import styled from "styled-components";
import ImgIcon from "../asset/icon/icon-upload.png";
const Container = styled.div`
  margin-bottom: 30px;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.colors.subTextColor};
  margin-bottom: 18px;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 204px;
  background-color: ${props => props.theme.colors.bgColor};
  border: 0.5 solid ${props => props.theme.colors.borderColor};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  &::after {
    position: absolute;
    right: 12px;
    bottom: 12px;
    content: "";
    width: 36px;
    height: 36px;
    background: ${props => props.theme.colors.lightGray} url(${ImgIcon})
      no-repeat center / 22px 22px;
    border-radius: 50%;
  }
`;

function ImgRegister({ subTitleText }) {
  return (
    <Container>
      <SubTitle>{subTitleText}</SubTitle>
      <Label htmlFor="productImg" />
      <input
        type="file"
        accept="image/png,image/jpeg"
        className="ir"
        id="productImg"
      />
    </Container>
  );
}

export default ImgRegister;
