import styled from "styled-components";
import basicImg from "../../../asset/basic-profile-img.svg";
import more from "../../../asset/icon-more-vertical.svg";
import { Link } from "react-router-dom";

export const CardLayout = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin: 20px 0;
`;

export const CardProfileContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CardProfileImg = styled.img.attrs(props => ({
  src: props.src || basicImg,
}))`
  width: 42px;
  height: 42px;
  border: 1px solid ${props => props.theme.palette["border"]};
  border-radius: 50%;
  margin-right: 12px;
`;

export const CardProfileLink = styled(Link)`
  display: flex;
`;

export const CardAthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardAthorName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
`;

export const CardAthorId = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.palette["subText"]};
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;

export const CardContentContainer = styled.section`
  padding-left: 54px;
`;

export const CardContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  white-space: pre-wrap;
`;

export const CardImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImageList = styled.ul`
  display: flex;
  transition: all 0.4s;
  cursor: pointer;
`;

export const CardImageItem = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 16px;
`;

export const CardDotList = styled.ul`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
`;


export const CardDotItem = styled.li`
  box-sizing: border-box;
`;

export const CardDotBtn = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette["lightMain"]};
  &.current {
    background-color: ${props => props.theme.palette["main"]};
  }
`;

export const CardDateText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.palette["subText"]};
`;

export const CardMoreBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${more}) no-repeat center / 18px 18px;
  background-color: inherit;
`;
