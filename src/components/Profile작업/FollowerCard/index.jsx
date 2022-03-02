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
        <FollwerImg src={image} />
      </FollowerImgWrapper>
      <FollowerInfoWrapper to={Link}>
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
