import React from "react";
import styled from "styled-components";
// import { PageLayOut } from "./index.style";
import { NotFoundLayOut } from "../../../components/MainLayOut";
import NotFoundIcon from "../../../asset/icon/icon-404.svg"
// import { Button } from "../../../components/Button";

const NotFound = () => {
  return (
    // <PageLayOut>
      <NotFoundLayOut>
        <NotFoundImg src={NotFoundIcon} />
        <LoginEmailTxt>페이지를 찾을 수 없습니다. :(</LoginEmailTxt>
        {/* <Button /> */}
      </NotFoundLayOut>
    // </PageLayOut>
  );
};

export default NotFound;

const LoginEmailTxt = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #767676;
  text-align: center;
`;

const NotFoundImg = styled.img`
  width: 158px;
  margin-bottom: 32px;
`;