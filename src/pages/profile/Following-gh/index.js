import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFollowingList,
  followUser,
  unfollowUser,
} from "../../../actions/followAction";
import UseGNBHook from "../../../hooks/useGNB";

const FollowingList = () => {
  const dispatch = useDispatch();

  const { accountId } = useParams();

  const { following } = useSelector(state => state.followingList);

  const { unfollow } = useSelector(state => state?.unfollowUser);

  console.log(following);

  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };

  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };

  useEffect(() => {
    dispatch(getFollowingList(accountId));
  }, [dispatch, unfollow]);

  return (
    <>
      <h1>팔로잉 목록</h1>
      <br />
      <br />
      <br />
      {following &&
        following.map((user, index) => {
          return (
            <ul key={index}>
              <li style={{ height: "100px", width: "100px" }}>
                <img src={user?.image} alt="프로필 사진" />
              </li>
              <br />
              <li>사용자명: {user?.username}</li>
              <br />
              <li>계정이름: {user?.accountname}</li>
              <br />
              <br />
              <br />
              {user?.isfollow ? (
                <button
                  onClick={() => onUnfollowClick(user?.accountname)}
                  style={{ cursor: "pointer" }}
                >
                  팔로우 취소
                </button>
              ) : (
                <button
                  onClick={() => onFollowClick(user?.accountname)}
                  style={{ cursor: "pointer" }}
                >
                  팔로우 등록
                </button>
              )}
            </ul>
          );
        })}
      <UseGNBHook />
    </>
  );
};

export default FollowingList;
