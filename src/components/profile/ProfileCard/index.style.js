import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 16px 26px;
`;
export const UserInfoImg = styled.img`
  width: 110px;
  height: 110px;
  border: 1px solid ${props => props.theme.palette["border"]};
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
`;

export const UserInfoName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const UserInfoId = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 16px;

  &::before {
    content: "@";
    margin-right: 3px;
  }
`;

export const UserInfoIntro = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 24px;
`;

export const FollowerLink = styled(Link)`
  position: absolute;
  display: block;
  left: 56px;
  top: 65px;
  text-align: center;
  cursor: pointer;
`;
export const FollowingLink = styled(Link)`
  position: absolute;
  display: block;
  left: 287px;
  top: 65px;
  text-align: center;
  cursor: pointer;
`;

export const FollowCount = styled.strong`
  display: block;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 6px;
  color: ${props => props.theme.palette["subText"]};
`;

export const FollowText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.palette["subText"]};
`;

export const UserInfoButtonsWrapper = styled.div`
  display: flex;
`;

export const BtnLink = styled(Link)`
  padding: 0 8px;
`;

export const ProfileBtn = styled.button`
  width: 120px;
  height: 34px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.palette["main"]};
  color: ${props => props.theme.palette["main"]};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const FollowBtn = styled.button`
  width: 120px;
  height: 34px;
  padding: 0 8px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette["main"]};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const CancelBtn = styled.button`
  width: 120px;
  height: 34px;
  padding: 0 8px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.palette["border"]};
  background-color: #fff;
  color: ${props => props.theme.palette["subText"]};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
