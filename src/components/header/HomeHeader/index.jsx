import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HomeHeaderLayOut, SearchBtn, SearchIcon, HeaderTitle } from "./index.style";

function HomeHeader() {
  const history = useHistory();
  return (
    <HomeHeaderLayOut>
      <HeaderTitle>
        <Link to="/home">어스마켓 피드</Link>
      </HeaderTitle>
      <SearchBtn onClick={() => history.push("/search")}>
        <SearchIcon />
      </SearchBtn>
    </HomeHeaderLayOut>
  );
};

export default HomeHeader;