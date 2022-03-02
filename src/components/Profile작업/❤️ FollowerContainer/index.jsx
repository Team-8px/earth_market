import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { followUser, unfollowUser } from "../../../actions/followAction";
import { FollowerSection, FollowerList } from "./index.style";
import FollowerCard from "../❤️🔖 FollowerCard";

function FollowerContainer() {
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { follower } = useSelector(state => state.followerList);

  // removeFollow
  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };
  // AddFollow
  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };

  //readux스토어에서 팔로우취소여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { unfollow } = useSelector(state => state?.unfollowUser);

  //readux스토어에서 팔로우등록여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { follow } = useSelector(state => state?.followUser);

  useEffect(() => {
    dispatch(getFollowerList(accountId));
  }, [dispatch, unfollow, follow]);
  return (
    <FollowerSection>
      {/* ul태그 */}
      <FollowerList>
        <FollowerCard />
      </FollowerList>
    </FollowerSection>
  );
}

export default FollowerContainer;
