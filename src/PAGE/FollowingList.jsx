import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 스타일 로직
import { HeaderFollow } from "../components/template/common/Header";
import Navigation from "../components/template/common/Navigation";
import { Button } from "../components/module/button/button";
//Navigation
// 비즈니스 로직
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowingList, unfollowUser, followUser } from "../actions/followAction";
import { Link } from "react-router-dom";
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

  //팔로잉 리스트 불러오기 API
  useEffect(() => {
    dispatch(getFollowingList(accountId));
  }, [dispatch, unfollow, follow]);
  return (
    <>
      <HeaderFollow />
      <LayOut>
        <UserList>
          {following &&
            following.map(user => {
              return (
                <UserItem key={user?._id}>
                  <UserImgWrapper>
                    <img src={user.image} alt="프로필 사진" />
                  </UserImgWrapper>
                  <UserInfoWrapper>
                    <UserName>{user.username}</UserName>
                    <UserIntro>{user.intro}</UserIntro>
                  </UserInfoWrapper>
                  {user.isfollow ? (
                  <Button
                    onClick={() => onUnfollowClick(user?.accountname)}
                    isButtonStatus={user.isfollow}
                    width="56px"
                    size="sm"
                  >
                    취소
                  </Button>
                ) : (
                  <Button
                    onClick={() => onFollowClick(user?.accountname)}
                    isButtonStatus={user.isfollow}
                    width="56px"
                    size="sm"
                  >
                    팔로우
                  </Button>
                  )}
                </UserItem>
              );
            })}
        </UserList>
      </LayOut>
      <Navigation />
    </>
  );
};
// key={user.username}
// img={user.image}
// intro={"user.intro"}
// username={user.username}

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const UserList = styled.ul`
  max-width: 390px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const UserItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const UserImgWrapper = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  font-size: 10px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfoWrapper = styled.div`
  margin-left: 12px;
  width: calc(100% - 118px);
  height: 100%;
  align-self: flex-start;
`;

const UserName = styled.strong`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

const UserIntro = styled.strong`
  color: #767676;
  font-size: 12px;
  line-height: 15px;
`;
export default FollowingList;
