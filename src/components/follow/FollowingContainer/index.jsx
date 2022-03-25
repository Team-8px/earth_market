import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFollowingList,
  unfollowUser,
  followUser,
} from "../../../actions/followAction";
import FollowingCard from "../FollowingCard";
import { changeDefaltImage } from "../../../util/changeDefaltImage";
import { FollowingSection, FollowingList } from "./index.style";
function FollowingContainer() {
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const { following } = useSelector(state => state.followingList);

  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };
  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };
  const { unfollow } = useSelector(state => state?.unfollowUser);
  const { follow } = useSelector(state => state?.followUser);

  useEffect(() => {
    dispatch(getFollowingList(accountId));
  }, [dispatch, unfollow, follow, accountId]);

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
                image={changeDefaltImage(followingUser.image)}
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
