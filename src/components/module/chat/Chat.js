import React from "react";
import styled from "styled-components";
// import EllipseImg from "../../../asset/basic-profile-img-small.svg";
import EllipseImg from "../../../asset/basic-profile-img-small.svg";

const ChatRoomLayOut = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 16px;
  min-height: 100%;
`;

const ChatRoomContainer = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 9px;
`;

const UserImgWrapper = styled.div`
  width: 42px;
  height: 42px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const UserMsgWrapper = styled.div`
  display: flex;
  gap: 6px;

  p {
    max-width: 240px;
    padding: 12px;
    background-color: #fff;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    border-top-left-radius: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  strong {
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #767676;
    align-self: flex-end;
  }
`;

export default function Chat() {
  return (
    <ChatRoomLayOut>
      <ChatRoomContainer>
        <UserImgWrapper>
          <img src={EllipseImg} alt="프로필 사진" />
        </UserImgWrapper>
        <UserMsgWrapper>
          <p>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          <strong>9:22</strong>
        </UserMsgWrapper>
      </ChatRoomContainer>
    </ChatRoomLayOut>
  );
}
