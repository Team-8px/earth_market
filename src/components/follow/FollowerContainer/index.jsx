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

const FollowerContainer = () => {
  const dispatch = useDispatch();

  const { accountId } = useParams();

  const { follower } = useSelector(state => state.followerList);

  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };

  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };

  const { unfollow } = useSelector(state => state?.unfollowUser);

  const { follow } = useSelector(state => state?.followUser);

  useEffect(() => {
    dispatch(getFollowerList(accountId));
  }, [dispatch, unfollow, follow]);

  return (
    <FollowerSection>
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
};

export default FollowerContainer;
