import React from "react";
import styled from "styled-components";
import SplashIcon from "../../../asset/icon/full-logo.svg";

const SplashImg = styled.img`
  width: 200px;
`;

export default function SplashLogo() {
  return <SplashImg src={SplashIcon} />;
}
