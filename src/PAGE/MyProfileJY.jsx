import React from "react";
import Profile from "../components/Profile/ProfileContainer";
import Product from "../components/Profile/ProductContainer";
import styled from "styled-components";
const MyProfileJY = () => {
  return (
    <>
      <Container>
        <Profile />
        <Product />
      </Container>
    </>
  );
};

const Container = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette["bg"]};
`;

export default MyProfileJY;
