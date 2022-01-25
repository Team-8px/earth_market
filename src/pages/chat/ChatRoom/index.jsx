import React from "react";
import { HeaderChat } from "../../../components/Header";
import { MainLayOut, ChatRoomLayOut,ChatRoomContainer, UserImgWrapper, UserMsgWrapper} from "./index.style";
import EllipseImg from "../../../asset/Ellipse-1.png";
const ChatRoom = () => {
  return (
    <MainLayOut>
      <HeaderChat />
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
  );
};

export default ChatRoom;
