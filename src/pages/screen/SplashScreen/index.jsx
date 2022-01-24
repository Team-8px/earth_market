import React from "react";
// import { PageLayOut } from "./index.style";
import { SplashScreenLayOut } from "../../../components/MainLayOut";
import SplashLogo from "../../../asset/icon/full-logo.svg";
import styled from "styled-components";

const SplashScreen = () => {
  return (
    // <PageLayOut>
        <SplashScreenLayOut>
          <SplashImg src={SplashLogo} />
        </SplashScreenLayOut>
    // </PageLayOut>
  );
};

export default SplashScreen;

const SplashImg = styled.img`
  width: 200px;
`;
