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
  const { users } = useSelector(state => state.userSearch);

  const onSubmit = data => {
    const { keyword } = data;
    dispatch(getSearchUser(keyword));
  };
  useEffect(() => {
    setSearchUsers(users);
  }, [setSearchUsers, users]);
  return (
    <SearchHeader>
      <SearchSection>
        <h1 className="a11y-hidden">계정 검색 창</h1>
        <PrevBtn onClick={() => history.goBack()}>
          <PrevIcon />
        </PrevBtn>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SearchInput {...register("keyword")} />
        </SearchForm>
      </SearchSection>
    </SearchHeader>
  );
}
export default SearchBar;
