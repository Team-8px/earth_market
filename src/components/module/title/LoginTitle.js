import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin: 30px 0 40px;
  text-align: center;
`;

export default function LoginTitle({ children }) {
  return <Title>{children}</Title>;
}
