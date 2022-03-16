import styled from "styled-components";
import { NavLink } from "react-router-dom";

import HomeIcon from "../../../asset/icon/icon-home.svg";
import InformationIcon from "../../../asset/icon/icon-message-circle.svg";
import PostIcon from "../../../asset/icon/icon-edit.svg";
import ProfileIcon from "../../../asset/icon/icon-user.svg";
import HomeIconFill from "../../../asset/icon/icon-home-fill.svg";
import InformationIconFill from "../../../asset/icon/icon-message-circle-fill.svg";
import ProfileIconFill from "../../../asset/icon/icon-user-fill.svg";

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 0 16px;
  border-top: 0.5px solid ${props => props.theme.palette["border"]};
  z-index: 10;
`;

export const NavItem = styled.li`
  width: 84px;
`;

export const StyledNavLink = styled(NavLink)`
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
    background: no-repeat center / contain;
  }
  &.home::before {
    background-image: url(${HomeIcon});
  }
  &.information::before {
    background-image: url(${InformationIcon});
  }
  &.upload::before {
    background-image: url(${PostIcon});
  }
  &.myprofile::before {
    background-image: url(${ProfileIcon});
  }

  &.active {
    color: ${props => props.theme.palette["main"]};
    &.home::before {
      background-image: url(${HomeIconFill});
    }
    &.information::before {
      background-image: url(${InformationIconFill});
    }
    &.myprofile::before {
      background-image: url(${ProfileIconFill});
    }
  }
`;
