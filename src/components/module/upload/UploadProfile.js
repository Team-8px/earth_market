import React from "react";
import styled from "styled-components";
import ImgIcon from "../../../asset/icon/icon-upload.png";

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 18px;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 204px;
  background-color: ${props => props.theme.palette["bg"]};
  border: 0.5 solid ${props => props.theme.palette["border"]};
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
    background: ${props => props.theme.palette["lightGray"]} url(${ImgIcon})
      no-repeat center / 22px 22px;
    border-radius: 50%;
  }
`;

export default function UploadProfile({ subTitleText }) {
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
