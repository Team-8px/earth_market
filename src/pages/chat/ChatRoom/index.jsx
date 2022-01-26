import React, { useState } from "react";
import { HeaderChat } from "../../../components/Header";
import { MainLayOut, ChatRoomLayOut,ChatRoomContainer, UserImgWrapper, UserMsgWrapper } from "./index.style";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, AlertBtn, ListBtn } from "../../../components/HiddenMenu";
import EllipseImg from "../../../asset/Ellipse-1.png";

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
        <ChatRoomLayOut>
      <ChatRoomContainer>
        <UserImgWrapper>
          <img src={EllipseImg} alt="프로필 사진" />
        </UserImgWrapper>
        <UserMsgWrapper>
          <p>옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.</p>
          <strong>9:22</strong>
        </UserMsgWrapper>
      </ChatRoomContainer>
      </ChatRoomLayOut>
      </MainLayOut>
      {/* 🕹 Nav Modal */}
      <HiddenMenu visible={navDialog}>
        <li>
          <AlertBtn type="button" isAlert={isNavAlert}>
            채팅방 나가기
          </AlertBtn>
        </li>
        <li>
          <ListBtn type="button" isDialog={isNavDialog}>
            임시 모달 창 끄기
          </ListBtn>
        </li>
      </HiddenMenu>
      {/* 🕹 Nav Alert */}
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
