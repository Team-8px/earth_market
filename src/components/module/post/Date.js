import React from "react";
import styled from "styled-components";

const Text = styled.strong`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #767676;
`;

export default function Date({ children }) {
  return <Text>{children}</Text>;
}
