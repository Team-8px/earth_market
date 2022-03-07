import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFollowingList,
  unfollowUser,
  followUser,
} from "../../../actions/followAction";
import FollowingCard from "../FollowingCard/inex";
import { FollowingSection, FollowingList } from "./index.style";
function FollowingContainer() {
  //   followinglistjy
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { following } = useSelector(state => state.followingList);

  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };
  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };

  //readux스토어에서 팔로우취소여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { unfollow } = useSelector(state => state?.unfollowUser);
  //readux스토어에서 팔로우등록여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { follow } = useSelector(state => state?.followUser);

  useEffect(() => {
    // 테스트 라우팅
    dispatch(getFollowingList(accountId));
  }, [dispatch, unfollow, follow]);

  return (
    <FollowingSection>
      <FollowingList>
        {following &&
          following.map(followingUser => {
            return (
              <FollowingCard
                key={Math.random() * 100}
                Link={`/profile/${followingUser.accountname}`}
                accountname={followingUser.accountname}
                image={followingUser.image}
                username={followingUser.username}
                intro={followingUser.intro}
                isfollow={followingUser.isfollow}
                onUnfollowClick={onUnfollowClick}
                onFollowClick={onFollowClick}
              />
            );
          })}
      </FollowingList>
    </FollowingSection>
  );
}

export default FollowingContainer;
