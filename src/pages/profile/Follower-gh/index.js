import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowerList } from "../../../actions/followAction";
import UseGNBHook from "../../../hooks/useGNB";

const FollowerList = () => {
  const dispatch = useDispatch();

  const { accountname } = useParams();

  const { follower } = useSelector(state => state.followerList);

  console.log(follower);

  useEffect(() => {
    dispatch(getFollowerList(accountname));
  }, [dispatch]);

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
            </ul>
          );
        })}
      <UseGNBHook />
    </>
  );
};

export default FollowerList;
