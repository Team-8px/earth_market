import React, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchContainer from "../components/search/SearchContainer";

const SearchJY = () => {
  const [SearchUser, setSearchUsers] = useState([]);
  return (
    <>
      <SearchBar setSearchUsers={setSearchUsers} />
      <SearchContainer SearchUser={SearchUser} />
    </>
  );
};

export default SearchJY;
