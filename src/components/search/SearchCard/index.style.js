import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchUserList = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const SearchUserImgWrapper = styled(Link)`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`;

const 서버제공이미지 = "http://146.56.183.55:5050/Ellipse.png";

export const SearchUserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
