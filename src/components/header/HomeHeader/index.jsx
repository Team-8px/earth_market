import React from "react";
import { useHistory } from "react-router-dom";
import { FollowHeaderLayOut, SearchBtn, HeaderTitle } from "./index.style";
import SearchIcon from "../../../asset/icon-search.svg";

function HomeHeader() {
    const history = useHistory();
    return (
        <FollowHeaderLayOut>
                <HeaderTitle>어스마켓 피드</HeaderTitle>
                <SearchBtn onClick={() => history.push("/search")}>
                    <img
                        src={SearchIcon}
                        alt="검색 버튼"
                     />
                </SearchBtn>
      </FollowHeaderLayOut>
    );
  };

export default HomeHeader;