import React from "react";
import {
  SearchHaeder,
  SearchHaederContainer,
  PrevBtn,
  PrevIcon,
  SearchForm,
  SearchLabel,
  SearchInput,
} from "./index.style";

function SearchBar() {
  return (
    <SearchHaeder>
      <SearchHaederContainer>
        <PrevBtn>
          <PrevIcon />
        </PrevBtn>
        <SearchForm>
          <SearchLabel>
            <SearchInput />
          </SearchLabel>
        </SearchForm>
      </SearchHaederContainer>
    </SearchHaeder>
  );
}
export default SearchBar;
