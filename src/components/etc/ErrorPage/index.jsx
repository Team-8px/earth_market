// 추후 업데이트 예정
import React from "react";
import { useHistory } from "react-router-dom";
import {
  ErrorContainer,
  ErrorIcon,
  ErrorSubText,
  PrevBtn,
} from "./index.style";

export default function ErrorPage() {
  const history = useHistory();
  return (
    <ErrorContainer>
      <ErrorIcon />
      <ErrorSubText>페이지를 로드할 수 없습니다</ErrorSubText>
      <PrevBtn onClick={() => history.goBack()}>뒤로가기</PrevBtn>
    </ErrorContainer>
  );
}
