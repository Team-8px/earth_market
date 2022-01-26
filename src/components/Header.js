// Header 컴포넌트 파일입니다.
import React from "react";
import styled from "styled-components";
import HeaderBackImg from "../asset/icon-arrow-left.svg";
import HeaderMoreImg from "../asset/icon-more-vertical.svg";
import HeaderSeaechImg from "../asset/icon-search.svg";
import { Button } from "./Button";

export function HeaderButton() {
  return (
    <HeaderLayOut>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLinkImg src={HeaderBackImg} />
        </HeaderWrap>
        <Button size="ms" width="90px" color="orange">
          업로드
        </Button>
      </HeaderContainer>
    </HeaderLayOut>
  );
}

export function HeaderSearch() {
  return (
    <HeaderContainer>
      <HeaderLinkImg src={HeaderBackImg} />
      <HeaderInput placeholder="계정검색"></HeaderInput>
    </HeaderContainer>
  );
}

export function HeaderHome() {
  return (
    <HeaderLayOut>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderTitle>감귤마켓 피드</HeaderTitle>
        </HeaderWrap>
        <HeaderLinkImg src={HeaderSeaechImg} />
      </HeaderContainer>
    </HeaderLayOut>
  );
}

export function HeaderBasic({ isDialog }) {
  return (
    <HeaderLayOut>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLinkImg src={HeaderBackImg} />
        </HeaderWrap>
        <HeaderLinkImg src={HeaderMoreImg} onClick={isDialog} />
      </HeaderContainer>
    </HeaderLayOut>
  );
}

export function HeaderChat({ isDialog }) {
  return (
    <HeaderLayOut>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLinkImg src={HeaderBackImg} />
          <HeaderTitle>애월읍 위니브 감귤농장</HeaderTitle>
        </HeaderWrap>
        <HeaderLinkImg src={HeaderMoreImg} onClick={isDialog} />
      </HeaderContainer>
    </HeaderLayOut>
  );
}

export function HeaderFollowList() {
  return (
    <HeaderLayOut>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLinkImg src={HeaderBackImg} />
          <HeaderFollowTitle>Followers</HeaderFollowTitle>
        </HeaderWrap>
      </HeaderContainer>
    </HeaderLayOut>
  );
}

// Product Modification - Header Component
const HeaderLayOut = styled.header`
  position: fixed;
  width: 0 auto;
  left: 0;
  top: 0;
  min-width: 390px;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`;

const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLinkImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
`;

const HeaderTitle = styled.h2`
  font-size: 20px;
`;

const HeaderFollowTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const HeaderInput = styled.input`
  display: block;
  width: 100%;
  height: 32px;
  background-color: #f2f2f2;
  border-style: none;
  border-radius: 32px;
  padding: 0 16px;
  font-size: 14px;

  &::placeholder {
    color: #c4c4c4;
  }
`;
