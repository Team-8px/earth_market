import React from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "./Button";
import PrevBtn from "../../../asset/icon-arrow-left.svg";
import MoreBtn from "../../../asset/icon-more-vertical.svg";
import SearchBtn from "../../../asset/icon-search.svg";
import { Button } from "../../module/button/button";

const Header = () => {
  return (
    <HeaderNav>
      <PrevBtnWrap />
      <MoreBtnWrap />
    </HeaderNav>
  );
};

export default Header;

export function HeaderFollow({ following }) {
  return (
    <HeaderNav>
      <HeaderWrap>
        <PrevBtnWrap />
        <HeaderTitle fontWeigt="400">
          {following ? "Followings" : "Followers"}
        </HeaderTitle>
      </HeaderWrap>
    </HeaderNav>
  );
}

export function HeaderChat() {
  return (
    <HeaderNav>
      <HeaderWrap>
        <PrevBtnWrap />
        <HeaderTitle fontSize="big">애월읍 위니브 감귤농장</HeaderTitle>
      </HeaderWrap>
      <MoreBtnWrap />
    </HeaderNav>
  );
}

export const HeaderHome = () => {
  return (
    <HeaderNav>
      <HeaderTitle fontSize="big">어스마켓 피드</HeaderTitle>
      <SearchBtnWrap />
    </HeaderNav>
  );
};

export function HeaderButton({ buttonText }) {
  return (
    <HeaderNav>
      <HeaderLinkImg src={PrevBtn} />
      <Button width="90px" size="ms">
        {buttonText}
      </Button>
    </HeaderNav>
  );
}

export function HeaderSearch() {
  return (
    <HeaderNav>
      <PrevBtnWrap />
      <Form>
        <Label>
          계정 검색창입니다.
          <HeaderInput type="text" placeholder="계정검색" />
        </Label>
      </Form>
    </HeaderNav>
  );
}

const HeaderNav = props => {
  return (
    <HeaderLayOut>
      <HeaderContainer>{props.children}</HeaderContainer>
    </HeaderLayOut>
  );
};

const PrevBtnWrap = () => {
  const history = useHistory();
  return (
    <HeaderLink onClick={() => history.goBack()}>
      <img src={PrevBtn} alt="이전 페이지 버튼" />
    </HeaderLink>
  );
};

const MoreBtnWrap = () => {
  return (
    <HeaderLink>
      <img src={MoreBtn} alt="더보기 버튼" />
    </HeaderLink>
  );
};

const SearchBtnWrap = () => {
  const history = useHistory();
  return (
    <HeaderLink>
      <img
        onClick={() => history.push("/search")}
        src={SearchBtn}
        alt="검색 버튼"
      />
    </HeaderLink>
  );
};

const HeaderLayOut = styled.header`
  position: sticky;
  width: 100%;
  height: 47.5px;
  min-width: 390px;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled.div`
  width: 22px;
  height: 22px;
  border: none;
  /* margin-right: 10px; */
  cursor: pointer;
`;

const HeaderLinkImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
`;

const HeaderTitle = styled.h2`
  margin-left: 8px;
  font-family: ${props =>
    props.fontWeigt === "400"
      ? "Spoqa Han Sans Neo R"
      : "Spoqa Han Sans Neo M"};
  font-size: ${props => (props.fontSize === "big" ? "20px" : "14px")};
`;

const Form = styled.form`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 1px;
  color: transparent;
`;

const HeaderInput = styled.input`
  width: 100%;
  height: 32px;
  background-color: #f2f2f2;
  border-style: none;
  border-radius: 32px;
  padding: 0 16px;
  font-size: 14px;

  &::placeholder {
    color: #c4c4c4;
  }
`;
