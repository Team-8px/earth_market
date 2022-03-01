import styled from "styled-components";
import { Link } from "react-router-dom";
import basicimg from "../../../asset/Ellipse-1.png";
import heart from "../../../asset/icon/icon-heart.svg";
import heartActive from "../../../asset/icon/icon-heart-active.png";
import comment from "../../../asset/icon/icon-message-circle.svg";
import more from "../../../asset/icon-more-vertical.svg";

export const CardGallerySection = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-top: 20px;
`;

export const CardProfileContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const CardProfileImg = styled.img.attrs(props => ({
  src: props.src || basicimg,
}))`
  width: 42px;
  height: 42px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;
`;

export const CardAthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardAthorName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
`;
export const CardAthorId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
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
  margin-bottom: 16px;
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
`;

export const CardImageItem = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  min-height: 228px;
  border: 0.5px solid ${props => props.theme.palette["border"]};
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const CardIconContainer = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px;
`;

export const CardLikeBtn = styled.button.attrs({ type: "button" })`
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette["subText"]};
  margin-right: 18px;
  background-color: inherit;
  padding: 0;

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${props => (props?.hearted ? heartActive : heart)})
      no-repeat center / 20px 20px;
    margin-right: 6px;
  }
  span {
  }
`;

export const CardCommentBtn = styled(Link)`
  display: flex;
  align-items: center;
  color: #767676;
  margin-right: 18px;
  background-color: inherit;
  padding: 0;

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    background: url(${comment}) no-repeat center / 20px 20px;
    margin-right: 6px;
  }
  span {
  }
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
