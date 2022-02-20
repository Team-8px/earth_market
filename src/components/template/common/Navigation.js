import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Navigation 이미지
import HomeIcon from "../../../asset/icon/icon-home.svg";
import ChatIcon from "../../../asset/icon/icon-message-circle.svg";
import PostIcon from "../../../asset/icon/icon-edit.svg";
import ProfileIcon from "../../../asset/icon/icon-user.svg";
// Navigation 이미지 - action
import HomeIconFill from "../../../asset/icon/icon-home-fill.svg";
import ChatIconFill from "../../../asset/icon/icon-message-circle-fill.svg";
import ProfileIconFill from "../../../asset/icon/icon-user-fill.svg";

const NavLayOut = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 0 16px;
  border-top: 0.5px solid #dbdbdb;
`;

const NavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavWrap = styled.li`
  width: 84px;
`;

const NavListLink = styled(NavLink)`
  display: block;
  font-size: 10px;
  color: ${props => props.theme.palette["subText"]};
  padding: 12px 0 6px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.home::before {
    background-image: url(${HomeIcon});
  }
  &.chatlist::before {
    background-image: url(${ChatIcon});
  }
  &.upload::before {
    background-image: url(${PostIcon});
  }
  &.myprofile::before {
    background-image: url(${ProfileIcon});
  }

  &:active {
    color: ${props => props.theme.palette["main"]};
    &.home::before {
      background-image: url(${HomeIconFill});
    }
    &.chatlist::before {
      background-image: url(${ChatIconFill});
    }
    &.myprofile::before {
      background-image: url(${ProfileIconFill});
    }
  }
`;

export const NavList = ({ NavText, className, url }) => {
  return (
    <NavWrap>
      <NavListLink to={url} className={className} exact>
        {NavText}
      </NavListLink>
    </NavWrap>
  );
};

const Navigation = () => {
  return (
    <NavLayOut>
      <NavContainer>
        <NavList url={"/home"} NavText={"홈"} className={"home"}></NavList>
        <NavList url={"/chatlist"} NavText={"채팅"} className={"chatlist"} />
        <NavList
          url={"/post/my/upload"}
          NavText={"게시물 작성"}
          className={"upload"}
        />
        <NavList
          url={"/profile/my"}
          NavText={"프로필"}
          className={"myprofile"}
        />
      </NavContainer>
    </NavLayOut>
  );
};

export default Navigation;
