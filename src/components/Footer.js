import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";
const Footer = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <ul>
        <br />
        <br />
        <li style={{ cursor: "pointer" }}>
          <Link to="/gh/home">홈</Link>
        </li>
        <br />
        <br />
        <br />
        <li style={{ cursor: "pointer" }}>
          <Link to="/gh/post/my/upload">게시물 작성</Link>
        </li>
        <br />
        <br />
        <br />
        <li style={{ cursor: "pointer" }}>
          <Link to="/gh/profile/my">프로필</Link>
        </li>
        <br />
        <br />
        <br />
        <li style={{ cursor: "pointer" }} onClick={onClick}>
          로그아웃
        </li>
      </ul>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
