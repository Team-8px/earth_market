import React, { useState } from "react";
// 스타일 컴포넌트
import {
  MainLayOut,
  ProductContainer,
  ProductWrapper,
  UserPostContainer,
  UserPostWrapper,
} from "./index.style";
import DisplayHandler from "../../../components/DisplayHandler";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, ListBtn, AlertBtn } from "../../../components/HiddenMenu";
import Post from "../../../components/Post";
import { HeaderBasic } from "../../../components/Header";
import UserInfo from "../../../components/UserInfo";
import SellProduct from "../../../components/SellProduct";
const MyProfile = () => {
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
      <HeaderBasic isDialog={isNavDialog} />
      {/* 유저 프로필 */}
      {/* header */}
      <UserInfo></UserInfo>
      {/* 상품목록 */}
      <ProductContainer>
        <ProductWrapper>
          <SellProduct />
        </ProductWrapper>
      </ProductContainer>
      <MainLayOut>
        {/* 유저 프로필 */}
        {/* header */}
        {/* 게시글 목록 */}
        <UserPostContainer>
          <UserPostWrapper>
            <DisplayHandler></DisplayHandler>
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
          <ListBtn type="button">설정 및 개인정보</ListBtn>
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

export default MyProfile;
