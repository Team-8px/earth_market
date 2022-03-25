import styled from "styled-components";
import more from "../../../asset/icon-more-vertical.svg";
import basicImg from "../../../asset/basic-profile-img.svg";

export const PostDetailSection = styled.main`
  position: fixed;
  height: calc(100% - 108px);
  overflow-y: scroll;
  width: 100%;
`;

export const PostCardWrapper = styled.article`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 16px;
`;

export const CommentSection = styled.section`
  max-width: 390px;
  padding: 20px 16px;
  margin: 0 auto;
`;

export const ContentBox = styled.section`
  padding-left: 54px;
`;

export const ContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

export const ItemWrapper = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  min-height: 228px;
  border: 0.5px solid ${props => props.theme.palette["border"]};
  border-radius: 10px;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const BtnList = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
`;

export const DotWrapper = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-evenly;
  width: 45px;
`;

export const DotBtn = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  background-color: ${props => props.theme.palette["lightMain"]};
  &.current {
    background-color: ${props => props.theme.palette["main"]};
  }
`;

export const Date = styled.strong`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #767676;
`;

export const MoreBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${more}) no-repeat center / 18px 18px;
  background-color: inherit;
`;

export const UserInfoContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;
export const ProfileImg = styled.img.attrs(props => ({
  src: props.src || basicImg,
}))`
  width: 42px;
  height: 42px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
`;
export const Id = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;
