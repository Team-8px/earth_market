import React from "react";
import { useHistory } from "react-router-dom";
import { InformationLayOut, InformationWrap, PrevBtn, HeaderTitle } from "./index.style";
import PrevIcon from "../../../asset/icon-arrow-left.svg";

function FollowHeader({ following }) {
  const history = useHistory();
  return (
    <InformationLayOut>
      <PrevBtn onClick={() => history.goBack()}>
        <img src={PrevIcon} alt="이전 페이지 버튼" />
      </PrevBtn>
      <HeaderTitle>
        어스마켓 소식
      </HeaderTitle>
    </InformationLayOut>
  );
};

export default FollowHeader;