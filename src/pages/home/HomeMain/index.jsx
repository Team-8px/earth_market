import React from "react";
import { Main, NoneFeed } from "./index.style";
import { Header, HeaderContainer } from "../../base/Header/index.style";
import { Footer, FooterContainer } from "../../base/NaviGation/index.style";

const HomeMain = () => {
  return (
    <>
      <Header>
        <HeaderContainer></HeaderContainer>
      </Header>
      <Main>
        <NoneFeed>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          illum facilis non corporis, possimus, dolor ratione vero ut saepe,
        </NoneFeed>
      </Main>
      <Footer>
        <FooterContainer>FooterContainer</FooterContainer>
      </Footer>
    </>
  );
};

export default HomeMain;
