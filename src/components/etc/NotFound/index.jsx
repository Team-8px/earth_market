import React from "react";
import { useHistory } from "react-router-dom";
import { NotFoundIcon, NotFoundSubText, PrevBtn } from "./index.style";

function NotFound() {
  const history = useHistory();

  return (
    <>
      <NotFoundIcon />
      <NotFoundSubText>페이지를 찾을 수 없습니다.</NotFoundSubText>
      <PrevBtn
        onClick={() => {
          history.goBack();
        }}
      >
        이전 페이지
      </PrevBtn>
    </>
  );
}

export default NotFound;
