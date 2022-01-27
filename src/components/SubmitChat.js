import React from "react";
import styled from "styled-components";
import ProfileIcon from "../asset/icon/basic-profile.svg";

export function SubmitChat () {
    return (
      <SubmitChatBox>
        <ProfileLinkImg src={ProfileIcon} alt="프로필"/>
        <SubmitChatLabel>
          댓글 입력하기
          <SubmitChatInput type="text" placeholder="댓글 입력하기..." />
        </SubmitChatLabel>
        <SubmitChatButton>게시</SubmitChatButton>
      </SubmitChatBox>  
    )
  };

  const SubmitChatBox = (props) => 
    <SubmitChatLayOut>
        <SubmitChatContainer>
           {props.children}
        </SubmitChatContainer>
    </SubmitChatLayOut>
  ;

  const SubmitChatLayOut = styled.header `
      position: fixed;
      width: 0 auto;
      left: 0;
      bottom: 0;
      min-width: 390px;
      width: 100%;
      padding: 12px 0;
      border-style: none;
      border-top: 0.5px solid #DBDBDB;
      background-color: #fff;
  `

  const SubmitChatContainer = styled.section `
      position: relative;
      display: flex;
      align-items: center;
      max-width: 100%;
      height: 48px;
      padding: 0 16px;
      font-size: 14px;
  `

  const  ProfileLinkImg = styled.img`  
      width: 36px;
      cursor: pointer;
  `

  // 웹 접근성을 높이는 방법입니다.
  const SubmitChatLabel = styled.label `
      display: block;
      width: 100%; 
      font-size: 3px;
      color: transparent;
  `

  const SubmitChatInput = styled.input `
      display: block;
      border-style: none;
      margin-left: 16px;
      &::placeholder {
        color: #C4C4C4;
      }
  `

const SubmitChatButton = styled.button `
      font-family: "Spoqa Han Sans Neo M";
      display: block;
      width: 30px; 
      border-style: none;
      margin-right: 4px;
      color: #C4C4C4;
      &:focus {
        color: #F26E22;;
      }
  `