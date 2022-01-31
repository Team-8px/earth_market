import React from "react";
import { HeaderSearch } from "../../../components/Header";
import { MainLayOut} from "./index.style";
import UserList from "../../../components/UserList";
import Navigation from "../../../components/Navigation";

const Search = () => {
  return (
    <>
      <HeaderSearch />
      <MainLayOut>
        <UserList></UserList>
      </MainLayOut>
      <Navigation />
    </>
  );
};

export default Search;
