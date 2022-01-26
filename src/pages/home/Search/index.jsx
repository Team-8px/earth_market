import React from "react";
import { HeaderSearch } from "../../../components/Header";
import { MainLayOut} from "./index.style";
import UserList from "../../../components/UserList";

const Search = () => {
  return (
    <>
      <MainLayOut>
        <HeaderSearch />
        <UserList></UserList>
      </MainLayOut>
    </>
  );
};

export default Search;
