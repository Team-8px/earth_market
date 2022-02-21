import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Navigation 이미지
import HomeIcon from "../asset/icon/icon-home.svg";
import ChatIcon from "../asset/icon/icon-message-circle.svg";
import PostIcon from "../asset/icon/icon-edit.svg";
import ProfileIcon from "../asset/icon/icon-user.svg";
// Navigation 이미지 - action
import HomeIconFill from "../asset/icon/icon-home-fill.svg";
import ChatIconFill from "../asset/icon/icon-message-circle-fill.svg";
import ProfileIconFill from "../asset/icon/icon-user-fill.svg";

const NavigationLayOut = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 0 16px;
  border-top: 0.5px solid #dbdbdb;
`;

const NavigationContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavigationWrap = styled.li`
  width: 84px;
`;

const NavigationLink = styled(NavLink)`
  display: block;
  font-size: 10px;
  color: #767676;
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
    color: #f26e22;
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

function Navigation() {
  return (
    <footer>
      <NavigationLayOut>
        <NavigationContainer>
          <NavigationWrap>
            <NavigationLink to="/" className="home">
              홈
            </NavigationLink>
          </NavigationWrap>
          <NavigationWrap>
            <NavigationLink to="/chatlist" className="chatlist">
              채팅
            </NavigationLink>
          </NavigationWrap>
          <NavigationWrap>
            <NavigationLink to="/post/upload" className="upload">
              게시물 작성
            </NavigationLink>
          </NavigationWrap>
          <NavigationWrap>
            <NavigationLink to="/myprofile" className="myprofile">
              프로필
            </NavigationLink>
          </NavigationWrap>
        </NavigationContainer>
      </NavigationLayOut>
    </footer>
  );
}

export default Navigation;
