import React from "react";
import styled from "styled-components";

const LayOut = styled.main`
  height: 100vh;
  ${props => props.theme.common["flexCenterColumn"]}
  justify-content: center;
`;

export default function Splash() {
  return <LayOut>{/* <SplashLogo></SplashLogo> */}</LayOut>;
}
