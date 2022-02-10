import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFollowerList,
  followUser,
  unfollowUser,
} from "../actions/followAction";

const FollowerList = () => {
  const dispatch = useDispatch();
  //accountId 계정이 필요한 이유는 myprofile과 yourprofile 둘다 커버하기 위한 노력
  const { accountId } = useParams();

  //readux스토어에서 팔로워 리스트 불러오기
  const { follower } = useSelector(state => state.followerList);

  //readux스토어에서 팔로우취소여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { unfollow } = useSelector(state => state?.unfollowUser);

  //readux스토어에서 팔로우등록여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { follow } = useSelector(state => state?.followUser);

  //팔로우 취소 API 자식 컴포넌트로 이동 가능성 있음
  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };

  //팔로우 등록 API 자식 컴포넌트로 이동 가능성 있음
  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };

  //팔로워 리스트 불러오기 API
  useEffect(() => {
    dispatch(getFollowerList(accountId));
  }, [dispatch, unfollow, follow]);

  return (
    <>
      <h1>FollowerList</h1>
      <h1>FollowerList</h1>
    </>
  );
};

export default FollowerList;
