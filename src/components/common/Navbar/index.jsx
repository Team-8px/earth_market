import React from "react";
import { NavList, NavItem, StyledNavLink } from "./index.style";

function Navigation() {
  return (
    <NavList>
      <NavItem>
        <StyledNavLink to="/home" className="home">
          홈
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/information" className="information">
          소식
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/post/upload" className="upload">
          게시물 작성
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/profile" className="myprofile">
          프로필
        </StyledNavLink>
      </NavItem>
    </NavList>
  );
}

export default Navigation;
