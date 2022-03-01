import React from "react";
import ProfileContainer from "../components/Profile작업/ProfileContainer";
import ProductContainer from "../components/Profile작업/ProductContainer";
import PostContainer from "../components/Profile작업/PostContainer";
import styled from "styled-components";
const MyProfileJY = () => {
  return (
    <>
      <Container>
        <ProfileContainer />
        <ProductContainer />
        <PostContainer />
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
