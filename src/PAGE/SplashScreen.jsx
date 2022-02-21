import React from "react";
import styled from "styled-components";
import SplashLogo from "../asset/icon/full-logo.svg";


const SplashScreen = () => {
  return (
    <>
      <SplashImg src={SplashLogo} />
    </>
  );
};

const SplashImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  /* vertical-align: middle; */
  height: 100%;
`;

export default SplashScreen;
