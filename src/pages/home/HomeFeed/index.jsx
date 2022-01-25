import React, { useState } from "react";
import { Alert, AlertButton } from "../../../components/Alert";
//스타일 컴포넌트
import { HeaderHome } from "../../../components/Header";
import { HiddenMenu, HiddenButton } from "../../../components/HiddenMenu";
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
      <MainLayOut>
        <HeaderHome />
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

      {/* 게시글 모달 */}
      <HiddenMenu visible={postDialog}>
        <li>
          <HiddenButton
            type="button"
            isAlert={isPostAlert}
            visible={postDialog}
          >
            신고하기
          </HiddenButton>
        </li>
        <li>
          <HiddenButton type="button" isDialog={isPostDialog}>
            모달창 닫기
          </HiddenButton>
        </li>
      </HiddenMenu>

      {/* 게시글 Alert */}
      <Alert visible={postAlert} messageText="신고하시겠습니까?">
        <li>
          <AlertButton type="button">네</AlertButton>
        </li>
        <li>
          <AlertButton type="button" isAlert={isPostAlert}>
            아니요
          </AlertButton>
        </li>
      </Alert>

      {/* 게시글 모달 */}
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
      </HiddenMenu>
    </>
  );
};

export default HomeFeed;
