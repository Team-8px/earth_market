// 추후 업데이트 예정
import React from "react";
import { useHistory } from "react-router-dom";
import {
  LoadingContainer,
  LoadingIcon,
  LoadingSubText,
  PrevBtn,
} from "./index.style";

export default function LoadingPage() {
  const history = useHistory();
  return (
    <LoadingContainer>
      <LoadingIcon />
      <LoadingSubText>로딩 중입니다...</LoadingSubText>
      <PrevBtn onClick={() => history.goBack()}>뒤로가기</PrevBtn>
    </LoadingContainer>
  );
}
