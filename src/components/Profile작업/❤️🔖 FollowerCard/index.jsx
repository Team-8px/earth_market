import React from "react";
import {
  FollowerItem,
  FollowerImgWrapper,
  FollwerImg,
  FollowerInfoWrapper,
  FollowerUserName,
  FollowerIntro,
  FollowBtn,
  CancelBtn,
} from "./index.style";

function FollowerCard() {
  const isfollowing = true;
  return (
    <FollowerItem>
      <FollowerImgWrapper>
        <FollwerImg />
      </FollowerImgWrapper>
      <FollowerInfoWrapper>
        <FollowerUserName>FollowerUserName</FollowerUserName>
        <FollowerIntro>FollowerIntro</FollowerIntro>
      </FollowerInfoWrapper>
      {isfollowing ? (
        <FollowBtn>팔로우</FollowBtn>
      ) : (
        <CancelBtn>취소</CancelBtn>
      )}
    </FollowerItem>
  );
}

export default FollowerCard;
