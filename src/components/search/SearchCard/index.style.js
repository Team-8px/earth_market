import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchUserItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const SearchUserImgWrapper = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SearchUserImg = styled.img.attrs(props => ({
  // src: props.src || basicImg,
  alt: "프로필 이미지",
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 10px;
  overflow: hidden;
`;

export const SearchUserInfoWrapper = styled.div`
  margin-left: 12px;
  height: 100%;
  align-self: flex-start;
`;

export const SearchUserName = styled.span`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

export const SearchUserId = styled.span`
  font-size: 12px;
  line-height: 1;
  color: ${props => props.theme.palette["subText"]};
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;
