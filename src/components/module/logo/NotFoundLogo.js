import React from "react";
import styled from "styled-components";
import NotFoundIcon from "../../../asset/icon/icon-404.svg";

const NotFoundImg = styled.img`
  width: 158px;
  margin-bottom: 32px;
`;

export default function NotFoundLogo() {
  return (
    <div>
      <NotFoundImg src={NotFoundIcon} />
    </div>
  );
}
