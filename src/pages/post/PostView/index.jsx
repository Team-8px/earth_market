import React, { useEffect, useState } from "react";
import { MainLayOut } from "../PostUpload/index.style";
import { CommentContainer, CommentWrapper, CommentText } from "./index.style";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, ListBtn, AlertBtn } from "../../../components/HiddenMenu";
import Post from "../../../components/Post";
import { HeaderBasic } from "../../../components/Header";
// 댓글 생성 부분 컴포넌트만 다시 불러와서 적용할 예정입니다.
// 프로필 이미지
import EllipseImg from "../../../asset/Ellipse-1.png";
const PostView = () => {
  // 스타일 컴포넌트 관련 상태관리

  // 🏞 게시글 메뉴
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  // 🕹 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  // 💬 댓글 메뉴
  const [chatDialog, setChatDialog] = useState(false);
  const [chatAlert, setChatAlert] = useState(false);
  const isChatDialog = () => setChatDialog(!chatDialog);
  const isChatAlert = () => setChatAlert(!chatAlert);

  return (
    <>
      <MainLayOut>
        <HeaderBasic isDialog={isNavDialog} />
        <CommentContainer>
          <Post
            authorId="테스트입니다"
            authorName="this is test"
            content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
            date="2022년 1월 18일"
            likeCount="999"
            commentCount="999"
            isDialog={isPostDialog}
          />
          <CommentWrapper>
            <img src={EllipseImg} alt="프로필 사진" />
            <strong>감귤러버</strong>
            <span>15분 전</span>
          </CommentWrapper>
            <CommentText>안녕하세요. 사진이 너무 멋있어요.</CommentText>
        </CommentContainer>
        <button onClick={isChatDialog}>테스트</button>
      </MainLayOut>
      {/* 🏞 게시글 Modal */}
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
      {/* 🏞 게시글 Alert */}
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
      {/* 🕹 Nav Modal */}
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
      {/* 🕹 Nav Alert */}
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
      {/* 💬 Comment Modal */}
      <HiddenMenu visible={chatDialog}>
        <li>
          <AlertBtn type="button" isAlert={isChatAlert}>
            신고하기
          </AlertBtn>
        </li>
        <li>
          <ListBtn type="button" isDialog={isChatDialog}>
            모달창 닫기
          </ListBtn>
        </li>
      </HiddenMenu>
      {/* 💬 Comment Alert */}
      <Alert visible={chatAlert} messageText="이 사용자를 신고하시겠어요?">
        <li>
          <AlertButton type="button" isAlert={isChatAlert}>
            취소
          </AlertButton>
        </li>
        <li>
          <AlertButton type="button">신고</AlertButton>
        </li>
      </Alert>
    </>
  );
};

export default PostView;
