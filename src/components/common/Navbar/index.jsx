import React from "react";
import { NavList, NavItem, StyledNavLink } from "./index.style";

function Navigation() {
  return (
        <NavList>
          <NavItem>
            <StyledNavLink to="/" className="home">
              홈
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/chatlist" className="chatlist">
              채팅
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/post/my/upload" className="upload">
              게시물 작성
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/profile/my" className="myprofile">
              프로필
            </StyledNavLink>
          </NavItem>
        </NavList>
  );
}

export default Navigation;