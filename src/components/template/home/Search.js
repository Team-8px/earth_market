import React, { useState } from "react";
import styled from "styled-components";
import { HeaderSearch } from "../common/Header";

const Search = () => {
  const [test, SetTest] = useState(null);
  return (
    <>
      <HeaderSearch />
      {test ? (
        <LayOut></LayOut>
      ) : (
        <LayOut>
          {/* <List> */}
          {/* <SearchUser></SearchUser> */}
          {/* </List> */}
        </LayOut>
      )}
      {/* <Navigation></Navigation> */}
    </>
  );
};
const LayOut = styled.main`
  position: fixed;
  height: calc(100% - 108px);
  overflow-y: scroll;
  min-width: 390px;
  width: 100%;
  min-width: 100%;
  height: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  padding: 20px 16px;
`;
const List = styled.div``;

export default Search;
