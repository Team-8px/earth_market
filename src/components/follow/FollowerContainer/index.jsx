import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  followUser,
  getFollowerList,
  unfollowUser,
} from "../../../actions/followAction";
import { FollowerSection, FollowerList } from "./index.style";
import FollowerCard from "../FollowerCard";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
function FollowerContainer() {
  //   followerlistjy
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { follower } = useSelector(state => state.followerList);

  console.log(follower);

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
    dispatch(getFollowerList(accountId));
  }, [dispatch, unfollow, follow]);
  
  return (
    <FollowerSection>
      {/* ul태그 */}
      <FollowerList>
        {follower &&
          follower.map(followerUser => {
            return (
              <FollowerCard
                key={Math.random() * 100}
                Link={`/profile/${followerUser.accountname}`}
                accountname={followerUser.accountname}
                image={changeDefaltImage(followerUser.image)}
                username={followerUser.username}
                intro={followerUser.intro}
                isfollow={followerUser.isfollow}
                onUnfollowClick={onUnfollowClick}
                onFollowClick={onFollowClick}
              />
            );
          })}
      </FollowerList>
    </FollowerSection>
  );
}

export default FollowerContainer;
