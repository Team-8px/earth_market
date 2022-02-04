import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getFollowerList,
  followUser,
  unfollowUser,
} from "../../../actions/followAction";
import UseGNBHook from "../../../hooks/useGNB";
import axios from "axios";
import { API_URL } from "../../../constants/defaultUrl";

const FollowerList = () => {
  const dispatch = useDispatch();

  const { accountId } = useParams();

  const { follower } = useSelector(state => state.followerList);

  const { unfollow } = useSelector(state => state?.unfollowUser);

  const { follow } = useSelector(state => state?.followUser);

  const onUnfollowClick = otherAccountId => {
    dispatch(unfollowUser(otherAccountId));
  };

  const onFollowClick = otherAccountId => {
    dispatch(followUser(otherAccountId));
  };

  useEffect(() => {
    dispatch(getFollowerList(accountId));
  }, [dispatch, unfollow, follow]);

  return (
    <>
      <h1>팔로워 목록</h1>
      <br />
      <br />
      <br />
      {follower &&
        follower.map((user, index) => {
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

export default FollowerList;
