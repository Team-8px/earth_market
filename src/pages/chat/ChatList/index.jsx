import React from "react";
import { HeaderBasic } from "../../../components/Header";
import { MainLayOut } from "./index.style";
import ChatInfo from "../../../components/ChatInfoList";

const ChatList = () => {
  return (
    <MainLayOut>
      <HeaderBasic />
      <ChatInfo/>
    </MainLayOut>
  )
};

export default ChatList;
