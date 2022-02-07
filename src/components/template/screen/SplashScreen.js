import React from "react";
import styled from "styled-components";

const Splash = () => {
  return <LayOut>{/* <SplashLogo></SplashLogo> */}</LayOut>;
};

const LayOut = styled.main`
  height: 100vh;
  ${props => props.theme.common["flexCenterColumn"]}
  justify-content: center;
`;

export default Splash;
