import styled from "styled-components";
import Prev from "../../../asset/icon-arrow-left.svg";

export const SearchHaeder = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: #fff;
  z-index: 10;
`;

export const SearchHaederContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const PrevBtn = styled.button.attrs({
  type: "button",
  alt: "이전 페이지 버튼",
})`
  width: 22px;
  height: 22px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

export const PrevIcon = styled.img.attrs({
  src: Prev,
})`
  width: 100%;
  height: 100%;
`;

export const SearchForm = styled.form`
  width: 100%;
`;

export const SearchLabel = styled.label`
  display: block;
  font-size: 1px;
`;
export const SearchInput = styled.input.attrs({
  name: "keyword",
  type: "text",
  placeholder: "계정검색",
  autoComplete: "off",
})`
  width: 100%;
  height: 32px;
  background-color: ${props => props.theme.palette["bg"]};
  border-style: none;
  border-radius: 32px;
  padding: 0 16px;
  font-size: 14px;
  color: ${props => props.theme.palette["main"]};
  caret-color: ${props => props.theme.palette["main"]};

  &::placeholder {
    color: ${props => props.theme.palette["lightGray"]};
  }
`;
