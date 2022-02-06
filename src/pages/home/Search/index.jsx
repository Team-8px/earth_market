import React from "react";
import { HeaderSearch } from "../../../components/Header";
import { MainLayOut} from "./index.style";
import SearchUser from "../../../components/module/user/SearchUser";
import Navigation from "../../../components/Navigation";

const Search = () => {
  return (
    <>
      <HeaderSearch />
      <MainLayOut>
        <SearchUser></SearchUser>
      </MainLayOut>
      <Navigation />
    </>
  );
};

export default Search;
