import React, { useState } from "react";
import {
  MainLayOut,
  ProductContainer,
  ProductWrapper,
  UserPostContainer,
  UserPostWrapper,
} from "./index.style";
import DisplayHandler from "../../../components/DisplayHandler";
import { HeaderBasic, Nav } from "../../../components/Header";
import UserInfo from "../../../components/UserInfo";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, ListBtn, AlertBtn } from "../../../components/HiddenMenu";
import Post from "../../../components/Post";

const YourProfile = () => {
  // 게시글 메뉴
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  // 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  return (
    <>
      <MainLayOut>
        <HeaderBasic isDialog={isNavDialog} />
        <UserInfo></UserInfo>
        <ProductContainer>
          <ProductWrapper></ProductWrapper>
        </ProductContainer>
        <UserPostContainer>
          <UserPostWrapper>
            <DisplayHandler />
            <Post
              authorId="테스트입니다"
              authorName="this is test"
              content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
              date="2022년 1월 18일"
              likeCount="999"
              commentCount="999"
              isDialog={isPostDialog}
            />
            <Post
              authorId="테스트입니다"
              authorName="this is test"
              content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
              date="2022년 1월 18일"
              likeCount="999"
              commentCount="999"
              isDialog={isPostDialog}
            />
            <Post
              authorId="테스트입니다"
              authorName="this is test"
              content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
              date="2022년 1월 18일"
              likeCount="999"
              commentCount="999"
              isDialog={isPostDialog}
            />
          </UserPostWrapper>
        </UserPostContainer>
      </MainLayOut>
      {/* 게시글 Modal */}
      <HiddenMenu visible={postDialog}>
        <li>
          <AlertBtn type="button" isAlert={isPostAlert}>
            신고하기
          </AlertBtn>
        </li>
        <li>
          <ListBtn type="button" isDialog={isPostDialog}>
            모달창 닫기
          </ListBtn>
        </li>
      </HiddenMenu>
      {/* 게시글 Alert */}
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <li>
          <AlertButton type="button" isAlert={isPostAlert}>
            취소
          </AlertButton>
        </li>
        <li>
          <AlertButton type="button">신고</AlertButton>
        </li>
      </Alert>
      {/* Nav Modal */}
      <HiddenMenu visible={navDialog}>
        <li>
          <ListBtn type="button" visible={navDialog}>
            설정 및 개인정보
          </ListBtn>
        </li>
        <li>
          <AlertBtn type="button" isAlert={isNavAlert}>
            로그아웃
          </AlertBtn>
        </li>
        <li>
          <ListBtn type="button" isDialog={isNavDialog}>
            임시 모달 창 닫기 버튼
          </ListBtn>
        </li>
      </HiddenMenu>
      {/* Nav Alert */}
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <li>
          <AlertButton type="button" isAlert={isNavAlert}>
            취소
          </AlertButton>
        </li>
        <li>
          <AlertButton type="button">로그아웃</AlertButton>
        </li>
      </Alert>
    </>
  );
};

export default YourProfile;
