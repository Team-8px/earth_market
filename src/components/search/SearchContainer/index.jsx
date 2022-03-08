import React from "react";
import SearchCard from "../SearchCard";
import { SearchSection, SearchUserList } from "./index.style";

function SearchContainer({ SearchUser }) {
  return (
    <SearchSection>
      <SearchUserList>
        {SearchUser &&
          SearchUser.map(user => {
            console.log(user.image, "1명의 유저");
            if(user.image === "http://146.56.183.55:5050/Ellipse.png"){
              user.image = "http://127.0.0.1:5502/src/svg/basic-profile-img.svg"
            } 
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
