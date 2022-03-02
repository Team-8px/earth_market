import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchContainer from "../components/search/SearchContainer";

const Search = () => {
  const [searchUser, setSearchUsers] = useState([]);
  return (
    <>
      <SearchBar setSearchUsers={setSearchUsers} />
      <SearchContainer SearchUser={searchUser} />
    </>
  );
};

export default Search;
