import styled from "styled-components";
import { Link } from "react-router-dom";

export const InformationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 16px;
  border-bottom: 1px solid ${props => props.theme.palette["border"]};
  cursor: pointer;
`;

export const InformationWrapper = styled.article`
  width: 100%;
  max-width: 450px;
`;

export const InformationLink = styled(Link)`
  display: flex;
`;

export const InformationImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  background: ${props => props.theme.palette["border"]};
  object-fit: cover;
`;

export const InformationInfoWrapper = styled.div`
  margin-left: 15px;
  width: calc(100% - 118px);
  height: 100%;
  align-self: flex-start;
  padding-bottom: 10px;
`;

export const InformationInfo = styled.span`
    font-size: 12px;
    color: ${props => props.theme.palette["subText"]};
`;

export const InformationTitle = styled.strong`
  display: block;
  margin: 5px 0 14px;
  line-height: 1.3;
  font-size: 20px;
  font-weight: 600;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const InformationDate = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    color: ${props => props.theme.palette["subText"]};
    margin-top: 8.5px;
    &::before {
      content: "·";
      margin: 0 4px;
    }
`;