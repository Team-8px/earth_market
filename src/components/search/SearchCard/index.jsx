import React from "react";
import {
  SearchUserItem,
  SearchUserImgWrapper,
  SearchUserImg,
  SearchUserInfoWrapper,
  SearchUserName,
  SearchUserId,
} from "./index.style";
import basicImg from "../../../asset/basic-profile-img.svg";

function SearchCard({ Link, userimage, username, accountname }) {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <SearchUserItem>
      <SearchUserImgWrapper to={Link}>
        <SearchUserImg src={userimage} onError={e => trigger(e)} />
        <SearchUserInfoWrapper>
          <SearchUserName>{username}</SearchUserName>
          <SearchUserId>{accountname}</SearchUserId>
        </SearchUserInfoWrapper>
      </SearchUserImgWrapper>
    </SearchUserItem>
  );
}
export default SearchCard;
