import React, { useState } from "react";
import { Alert, AlertButton } from "../../../components/Alert";
//스타일 컴포넌트
import { HeaderHome } from "../../../components/Header";
import { HiddenMenu, ListBtn, AlertBtn } from "../../../components/HiddenMenu";
import Navigation from "../../../components/Navigation";
import Post from "../../../components/Post";
import { MainLayOut } from "./index.style";

const HomeFeed = () => {
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
      <HeaderHome />
      <MainLayOut>
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
      </MainLayOut>
      <Navigation />

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

      {/* 게시글 모달
      <HiddenMenu visible={navDialog}>
        <li>
          <HiddenButton type="button" isAlert={isNavAlert} visible={navDialog}>
            신고하기
          </HiddenButton>
        </li>
        <li>
          <HiddenButton type="button" isDialog={isNavDialog}>
            모달창 닫기
          </HiddenButton>
        </li>
      </HiddenMenu> */}
    </>
  );
};

export default HomeFeed;
