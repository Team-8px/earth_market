import React, { useEffect } from "react";
import {
  SearchHeader,
  SearchSection,
  PrevBtn,
  PrevIcon,
  SearchForm,
  SearchInput,
} from "./index.style";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getSearchUser } from "../../../actions/userActions";

function SearchBar({ setSearchUsers }) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  //검색결과 사용자들 스토어에서 가져오기
  const { users } = useSelector(state => state.userSearch);
  console.log("SearchBar", users);

  const onSubmit = data => {
    const { keyword } = data;
    //API함수에 전달전에 매개변수 keyword가 잘 들어가는지 확인
    console.log(keyword, "검색어");
    //유저 검색 API
    dispatch(getSearchUser(keyword));
  };
  useEffect(() => {
    setSearchUsers(users);
  }, [setSearchUsers, users]);
  return (
    <SearchHeader>
      <SearchSection>
        <h1 className="textHidden">계정 검색 창</h1>
        <PrevBtn onClick={() => history.goBack()}>
          <PrevIcon />
        </PrevBtn>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SearchInput aria-label="search" {...register("keyword")} />
        </SearchForm>
      </SearchSection>
    </SearchHeader>
  );
}
export default SearchBar;
