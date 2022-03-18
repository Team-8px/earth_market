import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchContainer from "../components/search/SearchContainer";
import Navbar from "../components/common/Navbar";

const Search = () => {
  const [searchUser, setSearchUsers] = useState([]);
  return (
    <>
      <Navbar />
      <SearchBar setSearchUsers={setSearchUsers} />
      <SearchContainer SearchUser={searchUser} />
    </>
  );
};

export default Search;
