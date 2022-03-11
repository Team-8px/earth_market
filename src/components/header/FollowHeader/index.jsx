import React from "react";
import { useHistory } from "react-router-dom";
import {FollowHeaderLayOut, FollowHeaderWrap, PrevBtn, HeaderTitle} from "./index.style";
import PrevIcon from "../../../asset/icon-arrow-left.svg";

function FollowHeader({ following }) {
    const history = useHistory();
    return (
        <FollowHeaderLayOut>
            <FollowHeaderWrap>
                <PrevBtn onClick={() => history.goBack()}>
                    <img src={PrevIcon} alt="이전 페이지 버튼" />
                </PrevBtn>
                <HeaderTitle>
                    {following ? "Followings" : "Followers"}
                </HeaderTitle>
            </FollowHeaderWrap>
      </FollowHeaderLayOut>
    );
  };

export default FollowHeader;