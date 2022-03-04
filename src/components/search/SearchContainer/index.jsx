import React from "react";
import SearchCard from "../SearchCard";
import { SearchSection, SearchUserList } from "./index.style";

function SearchContainer({ SearchUser }) {
  return (
    <SearchSection>
      <SearchUserList>
        {SearchUser &&
          SearchUser.map(user => {
            return (
              <SearchCard
                key={Math.random() * 100}
                Link={`/profile/you/${user.accountname}`}
                userimage={user?.image}
                username={user?.username}
                accountname={user?.accountname}
              />
            );
          })}
      </SearchUserList>
    </SearchSection>
  );
}
export default SearchContainer;
