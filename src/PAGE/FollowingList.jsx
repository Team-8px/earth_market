import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 스타일 로직
import { HeaderFollow } from "../components/template/common/Header";
import { List, Item } from "../components/module/user/FollowersUser";
import Navigation from "../components/template/common/Navigation";
//Navigation
// 비즈니스 로직
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowingList, unfollowUser } from "../actions/followAction";

const FollowingList = () => {
  const dispatch = useDispatch();
  //accountId 계정이 필요한 이유는 myprofile과 yourprofile 둘다 커버하기 위한 노력
  const { accountId } = useParams();

  // http://localhost:3000/gh/profile/js/following

  //readux스토어에서 팔로잉 리스트 불러오기
  const { following } = useSelector(state => state.followingList);
  console.log(following);

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
      <HeaderFollow />
      <LayOut>
        <List>
          {following &&
            following.map(user => {
              return (
                <Item
                  key={user.username}
                  img={user.image}
                  intro={"user.intro"}
                  username={user.username}
                  // onTestClick={onUnfollowClick(id)}
                />
              );
            })}
        </List>
      </LayOut>
      <Navigation />
    </>
  );
};

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;
// 1. 스타일로직 링크 맞추기
// 2. 새로운 로직에 following 불러오기
export default FollowingList;

// {following &&
//   following.map(item => {
//     return (
//       <>
//         <div>{item.username}</div>
//         <div>{item.username}</div>
//         <div>{item.username}</div>
//         <div>{item.username}</div>
//         <div>{item.username}</div>
//         <img src={item.image} />
//       </>
//     );
//   })}
