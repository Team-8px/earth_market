import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../actions/userActions";

const JoinMembershipScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onNext = (event) => {
    dispatch(login(email, password));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>

      <div>
        <button type="button" onClick={onNext}>
          다음
        </button>
        <button type="button" onClick={logoutHandler}>
          로그아웃
        </button>
      </div>
    </>
  );
};

export default JoinMembershipScreen;
