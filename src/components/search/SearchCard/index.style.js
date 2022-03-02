import { Link } from "react-router-dom";
import styled from "styled-components";
import basicImg from "../../../asset/Ellipse 6.png";

export const SearchUserList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const SearchUserImgWrapper = styled(Link)`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;
export const SearchUserImg = styled.img.attrs(props => ({
  src: props.src || basicImg,
  alt: "프로필 사진",
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid ${props => props.theme.palette["border"]};
  font-size: 10px;
  overflow: hidden;
`;

export const SearchUserInfoWrapper = styled.div`
  margin-left: 12px;
  width: calc(100% - 118px);
  height: 100%;
  align-self: flex-start;
`;

export const SearchUserName = styled.strong`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

export const SearchUserId = styled.strong`
  color: ${props => props.theme.palette["subText"]};
  font-size: 12px;
  line-height: 15px;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;
