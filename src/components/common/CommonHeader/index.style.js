import styled from "styled-components";
import { Link } from "react-router-dom";
import prev from "../../../asset/icon-arrow-left.svg";
import more from "../../../asset/icon-more-vertical.svg";

export const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  min-width: 390px;
  height: 48px;
  background-color: #fff;
  align-items: center;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
  z-index: 10;
`;

export const PrevLink = styled(Link)`
  width: 22px;
  height: 22px;
  border: none;
  cursor: pointer;
`;

export const MoreBtn = styled.button.attrs({ type: "button" })`
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
