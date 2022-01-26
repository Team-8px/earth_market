import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowingList } from "../../../actions/followAction";
import UseGNBHook from "../../../hooks/useGNB";

const FollowingList = () => {
  const dispatch = useDispatch();

  const { accountname } = useParams();

  const { following } = useSelector(state => state.followingList);

  console.log(following);

  useEffect(() => {
    dispatch(getFollowingList(accountname));
  }, [dispatch]);

  return (
    <>
      <h1>팔로잉 목록</h1>
      {following &&
        following.map((user, index) => {
          return (
            <ul key={index}>
              <li>{user.username}</li>
              <li>{user.accountname}</li>
              <li>{user.image}</li>
            </ul>
          );
        })}
      <UseGNBHook />
    </>
  );
};

export default FollowingList;
