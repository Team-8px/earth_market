import React from "react";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
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
                Link={`/profile/${user.accountname}`}
                userimage={changeDefaltImage(user.image)}
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
