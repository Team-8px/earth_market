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
import basicImg from "../../../asset/basic-profile-img.svg";

const trigger = e => {
  e.target.src = basicImg;
};

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
        <FollowingImg 
        onError={e => {
          trigger(e);
        }}
        src={image} />
      </FollowingImgWrapper>
      <FollowingInfoWrapper to={Link}>
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
