import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowingList, unfollowUser } from "../actions/followAction";

const FollowingList = () => {
  const dispatch = useDispatch();
  //accountId 계정이 필요한 이유는 myprofile과 yourprofile 둘다 커버하기 위한 노력
  const { accountId } = useParams();

  //readux스토어에서 팔로잉 리스트 불러오기
  const { following } = useSelector(state => state.followingList);

  //현재 unfollow가 되면 리스트에서 사라짐, follow기능은 보류
  //readux스토어에서 팔로우취소여부를 불러와 useEffect에서 재 렌더링을 하기 위한 의도
  const { unfollow } = useSelector(state => state?.unfollowUser);

  //팔로우 취소 API 자식 컴포넌트로 이동 가능성 있음
  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };

  //팔로잉 리스트 불러오기 API
  useEffect(() => {
    dispatch(getFollowingList(accountId));
  }, [dispatch, unfollow]);
  return (
    <>
      <h1>FollowingList</h1>
      <h1>FollowingList</h1>
    </>
  );
};

export default FollowingList;
