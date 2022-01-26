// Header 컴포넌트 파일입니다.
import React, { useState } from "react";
import styled from "styled-components";

import HeaderBackImg from "../asset/icon-arrow-left.svg";
import HeaderMoreImg from "../asset/icon-more-vertical.svg";
import HeaderSeaechImg from "../asset/icon-search.svg";

// import { Button } from "./Button";

export function HeaderButton () {
    return ( 
      <HeaderBox>
          <HeaderLinkImg src={HeaderBackImg} />
        {/* <Button size="small">저장</Button> */}
      </HeaderBox>
    )
  }
  
  export function HeaderSearch () {
    return (
      <HeaderBox>
        <HeaderLinkImg src={HeaderBackImg} />
        <Label>
          계정 검색창입니다.
          <HeaderInput type="text" placeholder="계정검색" />
        </Label>
      </HeaderBox>  
    )
  }
  
  export function HeaderHome () {
    return (
      <HeaderBox>
        <HeaderTitle fontSize="big" inverted={true}>감귤마켓 피드</HeaderTitle>
        <HeaderLinkImg src={HeaderSeaechImg} />
      </HeaderBox>   
    )
  }
  
  // 컴포넌트 정리 중입니다.
  export function HeaderBasic () {
    return (
      <HeaderBox>
        <HeaderLinkImg src={HeaderBackImg} />      
        <HeaderLinkImg src={HeaderMoreImg} />
      </HeaderBox>
    )
  }

  // useState를 이용하여 HeaderBasic, HeaderChat 재사용성을 시도해봤습니다. false 적용하는 법은 아직 모르겠습니다.
  export function HeaderChat () {
    const [text, setText] = useState (true);

    return (
      <HeaderBox>
        <HeaderWrap>
          <HeaderLinkImg src={HeaderBackImg} />
          {text ? <HeaderTitle fontSize="big">애월읍 위니브 감귤농장</HeaderTitle> : null}
        </HeaderWrap>
        <HeaderLinkImg src={HeaderMoreImg} />
      </HeaderBox>    
    )
  }
  
  export function HeaderFollowList () {
    return (
        <HeaderBox>
          <HeaderWrap>
            <HeaderLinkImg src={HeaderBackImg} />
            <HeaderTitle fontWeigt="400">Followers</HeaderTitle>
          </HeaderWrap>
        </HeaderBox> 
    )
  }
  
  const HeaderBox = (props) => 
    <HeaderLayOut>
        <HeaderContainer>
           {props.children}
        </HeaderContainer>
    </HeaderLayOut>
  ;

  // Product Modification - Header Component
  const HeaderLayOut = styled.header `
      position: fixed;
      width: 0 auto;
      left: 0;
      top: 0;
      min-width: 390px;
      width: 100%;
      background-color: #fff;
      z-index: 10;
  `

  const HeaderContainer = styled.section `
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 100%;
      height: 48px;
      padding: 0 16px;
      border-bottom: 0.5px solid #DBDBDB;
  `
  
  const HeaderWrap = styled.div `
      display: flex;
      align-items: center;
  `
  
  const  HeaderLinkImg = styled.img`  
      width: 22px;
      height: 22px;
      margin-right: 10px;
      cursor: pointer;
  `
  
  const HeaderTitle = styled.h2`
      font-family: ${(props) => (props.fontWeigt === "400" ? "Spoqa Han Sans Neo R" : "Spoqa Han Sans Neo M")};
      font-size: ${(props) => (props.fontSize === "big" ? "20px" : "14px")};
  `

  const Label = styled.label `
      display: block;
      width: 100%; 
      font-size: 3px;
      color: transparent;
  `
  
  const HeaderInput = styled.input `
      width: 100%; 
      height: 32px;
      background-color: #F2F2F2;
      border-style: none;
      border-radius: 32px;
      padding: 0 16px;
      font-size: 14px;

      &::placeholder {
      color: #C4C4C4;
    }
  `