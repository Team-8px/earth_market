import React from "react";
import { SplashScreenLayOut } from "../../../components/MainLayOut";
import SplashLogo from "../../../asset/icon/full-logo.svg";
import styled from "styled-components";

const SplashScreen = () => {
  return (
        <SplashScreenLayOut>
          <SplashImg src={SplashLogo} />
        </SplashScreenLayOut>
  );
};

export default SplashScreen;

const SplashImg = styled.img`
  width: 200px;
`;
