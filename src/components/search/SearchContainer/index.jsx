import React from "react";
import SearchCard from "../SearchCard";
import { SearchSection, SerachUserList } from "./index.style";

function SearchContainer({ SearchUser }) {
  console.log("SearchContainer", SearchUser);
  return (
    <SearchSection>
      <SerachUserList>
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </SerachUserList>
    </SearchSection>
  );
}
export default SearchContainer;
