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

function SearchCard() {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <SearchUserList>
      <SearchUserImgWrapper>
        <SearchUserImg src={"image주세용"} onError={e => trigger(e)} />
      </SearchUserImgWrapper>
      <SearchUserInfoWrapper>
        <SearchUserName>SearchUserName</SearchUserName>
        <SearchUserId>SearchUserId</SearchUserId>
      </SearchUserInfoWrapper>
    </SearchUserList>
  );
}
export default SearchCard;
