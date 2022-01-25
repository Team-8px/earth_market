import React, { useState } from "react";
import { HeaderChat } from "../../../components/Header";
import { MainLayOut } from "./index.style";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, AlertBtn } from "../../../components/HiddenMenu";

const ChatRoom = () => {
  // 🕹 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);
  return (
    <>
      <MainLayOut>
        <HeaderChat isDialog={isNavDialog} />
        ChatRoom
      </MainLayOut>
      {/* 🕹 Nav Modal */}
      <HiddenMenu visible={navDialog}>
        <li>
          <AlertBtn type="button" isAlert={isNavAlert}>
            채팅방 나가기
          </AlertBtn>
        </li>
      </HiddenMenu>
      {/* 🕹 Nav Al ert */}
      <Alert visible={navAlert} messageText="채팅방을 나가시겠어요?">
        <li>
          <AlertButton type="button" isAlert={isNavAlert}>
            나가기
          </AlertButton>
        </li>
        <li>
          <AlertButton type="button" isAlert={isNavAlert}>
            취소
          </AlertButton>
        </li>
      </Alert>
    </>
  );
};

export default ChatRoom;
