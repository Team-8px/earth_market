import styled from "styled-components";
import Search from "../../../asset/icon-search.svg";

export const HomeHeaderLayOut = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 48px;
  top: 0;
  background-color: #fff;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
  z-index: 10;
`;

export const SearchBtn = styled.button.attrs({
  type: "button"
})`
  width: 22px;
  height: 22px;
  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled.img.attrs({
  src: Search,
  alt: "계정 검색 버튼",
})`
  width: 100%;
  height: 100%;
`;

export const HeaderTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
`;
