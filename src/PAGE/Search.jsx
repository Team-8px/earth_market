import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getSearchUser } from "../actions/userActions";

const Search = () => {
  //리덕스 스토어에서 어떤 액션이 있는지 확인 후, API성공시 데이터 확인
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { users } = useSelector(state => state.userSearch);

  //API성공 후 users 확인
  console.log(users && users);

  const onSubmit = data => {
    const { keyword } = data;
    //API함수에 전달전에 매개변수 keyword가 잘 들어가는지 확인
    console.log(keyword);
    dispatch(getSearchUser(keyword));
  };
  return (
    <>
      <h1>search</h1>
    </>
  );
};

export default Search;
