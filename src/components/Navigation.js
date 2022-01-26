import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationLayOut=styled.nav `
  position: fixed;
  right: 0; bottom: 0; left: 0; 
  background-color: #fff;
  padding: 0 16px;
  border-top: 0.5px solid #DBDBDB;
`

const NavigationContainer=styled.ul `
  display: flex;
  justify-content: space-between;   
`

const NavigationWrap=styled.li `
  width: 84px;
`

const NavigationLink=styled(NavLink) `
  display: block;
  font-size: 10px;
  color: #767676;
  padding: 12px 0 6px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    background-color: yellow;
    margin-bottom: 6px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &.home::before {
    /* 가상요소로 이미지가 안들어갑니다... */
    /* background-image: url('../asset/icon/icon-home.svg'); */
    background-image: url({ImgImg});
  }
  &.chatlist::before {
    background-image: url('../asset/icon/icon-message-circle.svg');
  }
  &.upload::before {
    background-image: url('../asset/icon/icon-edit.svg');
  }
  &.myprofile::before {
    background-image: url('../asset/icon/icon-user.svg');
  }

  &:active {
    color: #f26e22;
    &.home::before {
      background-image: url('../asset/icon/icon-home-fill.svg');
    }
    &.chatlist::before {
      background-image: url('../asset/icon/icon-message-circle-fill.svg');
    }
    &.myprofile::before {
      background-image: url('../asset/icon/icon-user-fill.svg');
    }
  }
`

function Navigation() {
  return (
      <footer>
        <NavigationLayOut>
          <NavigationContainer>
            <NavigationWrap>
              <NavigationLink to="/"className="home">
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