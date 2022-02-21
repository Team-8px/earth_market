import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

const SubText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #767676;
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
`;

export const SubTitle = () => {
  return <SubText>나중에 언제든지 변경할 수 있습니다.</SubText>;
};

export default function LoginTitle({ children }) {
  return <Title>{children}</Title>;
}
