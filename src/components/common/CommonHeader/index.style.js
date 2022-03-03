import styled from "styled-components";
import prev from "../../../asset/icon-arrow-left.svg";
import more from "../../../asset/icon-more-vertical.svg";

export const HeaderSection = styled.header`
  position: sticky;
  width: 100%;
  height: 47.5px;
  min-width: 390px;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const IconLink = styled.button.attrs({ type: "button" })`
  width: 22px;
  height: 22px;
  border: none;
  cursor: pointer;
`;

export const PrevIcon = styled.img.attrs({
  alt: "이전 페이지 버튼",
  src: prev,
})``;
export const MoreIcon = styled.img.attrs({
  alt: "더보기 버튼",
  src: more,
})``;
