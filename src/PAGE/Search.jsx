import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getSearchUser } from "../actions/userActions";
//스타일
import { HeaderSearch } from "../components/template/common/Header";
import {
  SearchUserList,
  SearchUserItem,
} from "../components/module/user/SearchUser";
import PrevBtn from "../asset/icon-arrow-left.svg";
// icon-arrow-left.svg
const Search = () => {
  //리덕스 스토어에서 어떤 액션이 있는지 확인 후, API성공시 데이터 확인
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  //검색결과 사용자들 스토어에서 가져오기
  const { users } = useSelector(state => state.userSearch);

  //API성공 후 users 확인
  console.log(users && users);

  const onSubmit = data => {
    const { keyword } = data;
    //API함수에 전달전에 매개변수 keyword가 잘 들어가는지 확인
    console.log(keyword, "검색어");
    //유저 검색 API
    dispatch(getSearchUser(keyword));
  };
  return (
    <>
      <HeaderLayOut>
        <HeaderContainer>
          <HeaderLink to={"/home"}>
            <img src={PrevBtn} alt="이전 페이지 버튼" />
          </HeaderLink>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              계정 검색창입니다.
              <HeaderInput
                name="keyword"
                {...register("keyword")}
                type="text"
                placeholder="계정검색"
              />
            </Label>
          </Form>
        </HeaderContainer>
      </HeaderLayOut>
      <LayOut>
        <UserListContainer>
          {users &&
            users.map(user => {
              return (
                <UserListWrapper key={user._id}>
                  <UserImgWrapper>
                    <img src={user?.image} alt="프로필 사진" />
                  </UserImgWrapper>
                  <UserInfoWrapper>
                    <UserName>
                      <strong>{user?.username}</strong>
                    </UserName>
                    <UserId>
                      <strong>{user?.accountname}</strong>
                    </UserId>
                  </UserInfoWrapper>
                </UserListWrapper>
              );
            })}
        </UserListContainer>
      </LayOut>
    </>
  );
};

const HeaderLayOut = styled.header`
  position: fixed;
  width: 100%;
  min-width: 390px;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

const HeaderContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const HeaderLink = styled(Link)`
  width: 22px;
  height: 22px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 1px;
  color: transparent;
`;

const HeaderInput = styled.input`
  width: 100%;
  height: 32px;
  background-color: #f2f2f2;
  border-style: none;
  border-radius: 32px;
  padding: 0 16px;
  font-size: 14px;

  &::placeholder {
    color: #c4c4c4;
  }
`;
const LayOut = styled.main`
  position: fixed;
  display: flex;
  justify-content: center;
  height: calc(100% - 108px);
  padding: 20px 16px;
  overflow-y: scroll;
  min-width: 100%;
  width: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const UserListContainer = styled.ul`
  max-width: 390px;
  margin: 0 auto;
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

const UserId = styled.strong`
  color: #767676;
  font-size: 12px;
  line-height: 15px;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;

export default Search;
