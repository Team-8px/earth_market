import React from "react";
import SearchCard from "../SearchCard";
import { SearchSection, SerachUserList } from "./index.style";

function SearchContainer({ SearchUser }) {
  return (
    <SearchSection>
      <SerachUserList>
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
      </SerachUserList>
    </SearchSection>
  );
}
export default SearchContainer;
