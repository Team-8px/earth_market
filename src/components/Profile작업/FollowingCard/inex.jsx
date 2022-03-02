import React from "react";
import {
  FollowingItem,
  FollowingImgWrapper,
  FollowingImg,
  FollowingInfoWrapper,
  FollowingUserName,
  FollowingIntro,
  FollowBtn,
  CancelBtn,
} from "./index.style";

function FollowingCard({
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
    <FollowingItem>
      <FollowingImgWrapper to={Link}>
        <FollowingImg src={image} />
      </FollowingImgWrapper>
      <FollowingInfoWrapper>
        <FollowingUserName>{username}</FollowingUserName>
        <FollowingIntro>{intro}</FollowingIntro>
      </FollowingInfoWrapper>
      {isfollow ? (
        <CancelBtn onClick={() => onUnfollowClick(accountname)}>취소</CancelBtn>
      ) : (
        <FollowBtn onClick={() => onFollowClick(accountname)}>팔로우</FollowBtn>
      )}
    </FollowingItem>
  );
}
export default FollowingCard;
