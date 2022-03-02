import React from "react";
import {
  FollowerItem,
  FollowerImgWrapper,
  FollowerImg,
  FollowerInfoWrapper,
  FollowerUserName,
  FollowerIntro,
  FollowBtn,
  CancelBtn,
} from "./index.style";

function FollowerCard({
  Link,
  image,
  accountname,
  username,
  intro,
  isfollow,
  onUnfollowClick,
  onFollowClick,
}) {
  return (
    <FollowerItem>
      <FollowerImgWrapper to={Link}>
        <FollowerImg src={image} />
      </FollowerImgWrapper>
      <FollowerInfoWrapper>
        <FollowerUserName>{username}</FollowerUserName>
        <FollowerIntro>{intro}</FollowerIntro>
      </FollowerInfoWrapper>
      {isfollow ? (
        <CancelBtn onClick={() => onUnfollowClick(accountname)}>취소</CancelBtn>
      ) : (
        <FollowBtn onClick={() => onFollowClick(accountname)}>팔로우</FollowBtn>
      )}
    </FollowerItem>
  );
}

export default FollowerCard;
