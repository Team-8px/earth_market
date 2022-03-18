import React from "react";
import { useHistory } from "react-router-dom";
import { FollowHeaderLayOut, PrevBtn, HeaderTitle } from "./index.style";
import PrevIcon from "../../../asset/icon-arrow-left.svg";

function FollowHeader({ following }) {
    const history = useHistory();
    return (
        <FollowHeaderLayOut>
            <PrevBtn onClick={() => history.goBack()}>
                <img src={PrevIcon} alt="이전 페이지 버튼" />
            </PrevBtn>
            <HeaderTitle>
                {following ? "Followings" : "Followers"}
            </HeaderTitle>
        </FollowHeaderLayOut>
    );
};

export default FollowHeader;