import React from "react";
import styled from "styled-components";
import MarketLogo from "../../../asset/symbol-logo-W.png";

const Logo = styled.div`
  width: 144px;
  height: 144px;
`;

export default function LoginLogo() {
    return (
    <Logo>
      <img src={MarketLogo} alt="감귤마켓" />
    </Logo>
  );
}
