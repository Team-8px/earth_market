import React from "react";
import {
  SearchUserList,
  SearchUserImgWrapper,
  SearchUserImg,
  SearchUserInfoWrapper,
  SearchUserName,
  SearchUserId,
} from "./index.style";
import basicImg from "../../../asset/Ellipse 6.png";

function SearchCard({ Link, userimage, username, accountname }) {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <SearchUserList>
      <SearchUserImgWrapper to={Link}>
        <SearchUserImg src={userimage} onError={e => trigger(e)} />
      </SearchUserImgWrapper>
      <SearchUserInfoWrapper>
        <SearchUserName>{username}</SearchUserName>
        <SearchUserId>{accountname}</SearchUserId>
      </SearchUserInfoWrapper>
    </SearchUserList>
  );
}
export default SearchCard;
