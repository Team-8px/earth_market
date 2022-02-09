import React from "react";
import styled from "styled-components";
import SplashLogo from "../../module/logo/SplashLogo";

const LayOut = styled.main`
  height: 100vh;
  ${props => props.theme.common["flexCenterColumn"]}
  justify-content: center;
`;

const Splash = () => {
  return (
    <LayOut>
      <SplashLogo />
    </LayOut>
  );
};

export default Splash;
