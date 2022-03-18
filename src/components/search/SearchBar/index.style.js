import styled from "styled-components";
import Prev from "../../../asset/icon-arrow-left.svg";

export const SearchHeader = styled.header`
  position: sticky;
  top: 0;
  height: 48px;
  padding: 0 16px;
  background-color: #fff;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
  z-index: 10;
`;

export const SearchSection = styled.section`
  display: flex;
  align-items: center;
  max-width: 100%;
  min-width: 390px;
  height: 48px;
`;

export const PrevBtn = styled.button.attrs({
  type: "button",
})`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
`;

export const PrevIcon = styled.img.attrs({
  src: Prev,
  alt: "이전 페이지 버튼",
})`
  width: 100%;
  height: 100%;
`;

export const SearchForm = styled.form`
  width: 100%;
  label {
    display: block;
    font-size: 1px;
  }
`;

export const SearchInput = styled.input.attrs({
  name: "keyword",
  type: "text",
  title: "계정 검색하기",
  placeholder: "계정 검색",
  autoComplete: "off",
})`
  width: 100%;
  height: 32px;
  padding: 0 16px;
  background-color: ${props => props.theme.palette["bg"]};
  border-style: none;
  border-radius: 32px;
  font-size: 14px;
  color: ${props => props.theme.palette["main"]};
  caret-color: ${props => props.theme.palette["main"]};

  &::placeholder {
    color: ${props => props.theme.palette["lightGray"]};
  }
`;
