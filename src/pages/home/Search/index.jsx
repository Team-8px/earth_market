import React from "react";
import { HeaderSearch } from "../../../components/Header";
import { MainLayOut, UserListContainer, UserListWrapper, UserInfoWrapper, UserName, UserId } from "./index.style";

const Search = () => {
  return (
    <MainLayOut>
      <HeaderSearch />
      <UserListContainer>
      <UserListWrapper></UserListWrapper>
      <UserInfoWrapper>
        <UserName></UserName>
        <UserId></UserId>
      </UserInfoWrapper>
      </UserListContainer>
      // Search
    </MainLayOut>
  );
};

export default Search;
