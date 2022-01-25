import React, { useState } from "react";
import { HeaderBasic } from "../../../components/Header";
import { MainLayOut } from "./index.style";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, ListBtn, AlertBtn } from "../../../components/HiddenMenu";

const ChatList = () => {
  // 🕹 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);
  return (
    <>
      <MainLayOut>
        <HeaderBasic isDialog={isNavDialog} />
        ChatList
      </MainLayOut>
      {/* 🕹 Nav Modal */}
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
    </>
  );
};

export default ChatList;
