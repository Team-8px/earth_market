import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getFollowerList,
  followUser,
  unfollowUser,
} from "../actions/followAction";
import styled from "styled-components";
import { HeaderFollow } from "../components/template/common/Header";
import { Button } from "../components/module/button/button";

const FollowerList = () => {
  const dispatch = useDispatch();
  //accountId 계정이 필요한 이유는 myprofile과 yourprofile 둘다 커버하기 위한 노력
  const { accountId } = useParams();

  //readux스토어에서 팔로워 리스트 불러오기
  const { follower } = useSelector(state => state.followerList);

  console.log(follower);

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
      <HeaderFollow />
      <LayOut>
        {follower &&
          follower.map(followerUser => {
            return (
              <UserListContainer key={followerUser?._id}>
                <UserListWrapper>
                  <UserImgWrapper>
                    <Link to={`/profile/you/${followerUser.accountname}`}>
                      <img src={followerUser.image} alt="프로필 사진" />
                    </Link>
                  </UserImgWrapper>
                  <UserInfoWrapper>
                    <UserName>{followerUser.username}</UserName>
                    {/* <UserIntro>유저인트로</UserIntro> */}
                  </UserInfoWrapper>
                  {followerUser.isfollow ? (
                    <Button
                      onClick={() => onUnfollowClick(followerUser?.accountname)}
                      isButtonStatus={followerUser.isfollow}
                      width="56px"
                      size="sm"
                    >
                      취소
                    </Button>
                  ) : (
                    <Button
                      onClick={() => onFollowClick(followerUser?.accountname)}
                      isButtonStatus={followerUser.isfollow}
                      width="56px"
                      size="sm"
                    >
                      팔로우
                    </Button>
                  )}
                </UserListWrapper>
              </UserListContainer>
            );
          })}
      </LayOut>
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

const UserListContainer = styled.ul`
  max-width: 390px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const UserListWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const UserImgWrapper = styled.div`
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

export default FollowerList;
