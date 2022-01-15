import React from "react";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <ul>
        <li><Link to="/product">상품등록</Link></li>
        <li><Link to="/post/upload">게시글등록</Link></li>
        <li><Link to="/myprofile">마이프로필</Link></li>
      </ul>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
