import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getSearchUser } from "../../../actions/userActions";
import UseGNBHook from "../../../hooks/useGNB";

const Search = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { users } = useSelector(state => state.userSearch);

  const onSubmit = data => {
    const { keyword } = data;
    dispatch(getSearchUser(keyword));
  };

  return (
    <>
      <h1>유저 검색</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="keyword"
            type="text"
            placeholder="유저 검색"
            {...register("keyword")}
          />
        </div>
        <div>
          <button>검색</button>
        </div>
      </form>
      <br />
      <br />
      <br />
      {users &&
        users.map((user, index) => {
          return (
            <ul key={index}>
              <li>
                <img
                  src={user?.image}
                  style={{ width: "100px", height: "100px" }}
                  alt="프로필 사진"
                />
              </li>
              <li>사용자: {user?.username}</li>
              <li>계정: {user?.accountname}</li>
            </ul>
          );
        })}
      <br />
      <br />
      <br />
      <UseGNBHook />
    </>
  );
};

export default Search;
