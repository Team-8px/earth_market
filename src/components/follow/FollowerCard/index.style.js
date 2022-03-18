import styled from "styled-components";
import { Link } from "react-router-dom";
import basicImg from "../../../asset/basic-profile-img.svg";

export const FollowerItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const FollowerWrapper = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid ${props => props.theme.palette["border"]};
  font-size: 10px;
  overflow: hidden;
`;

export const FollowerImg = styled.img.attrs(props => ({
  src: props.src || basicImg,
  alt: "프로필 이미지",
}))`
  height: 100%;
  object-fit: cover;
`;

export const FollowerInfoWrapper = styled.div`
  width: calc(100% - 160px);
  height: 100%;
  margin-left: 12px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
`;

export const FollowerUserName = styled.span`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

export const FollowerIntro = styled.span`
  font-size: 12px;
  line-height: 1;
  color: ${props => props.theme.palette["subText"]};
`;

export const FollowBtn = styled.button.attrs({ type: "button" })`
  position: absolute;
  right: 0;
  width: 56px;
  height: 28px;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette["main"]};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const CancelBtn = styled.button.attrs({ type: "button" })`
  position: absolute;
  right: 0;
  width: 56px;
  height: 28px;
  border-radius: 26px;
  border: 1px solid ${props => props.theme.palette["border"]};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: ${props => props.theme.palette["subText"]};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
