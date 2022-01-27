import React from "react";
import { Button } from "../../../components/Button";
import { MainLayOut } from "./index.style";
import styled from "styled-components";
import { NotFoundLayOut } from "../../../components/MainLayOut";
import NotFoundIcon from "../../../asset/icon/icon-404.svg"

const NotFound = () => {
  return (
    <NotFoundLayOut>
        <NotFoundImg src={NotFoundIcon} />
        <LoginEmailTxt>페이지를 찾을 수 없습니다. :(</LoginEmailTxt>
        <Button size="lg" width="120px">
          이전 페이지
        </Button>
    </NotFoundLayOut>
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