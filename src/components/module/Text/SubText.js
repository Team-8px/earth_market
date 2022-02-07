import React from "react";
import styled from "styled-components";
const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #767676;
  text-align: center;
  margin-bottom: 20px;
`;

export default function SubText({ children }) {
  return <Text>{children}</Text>;
}
