import React from "react";
import SearchCard from "../SearchCard";
import { SearchSection, SerachUserList } from "./index.style";

function SearchContainer() {
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
