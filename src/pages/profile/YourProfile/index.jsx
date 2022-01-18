import React from "react";
import {
  MainLayOut,
  UserInfoContainer,
  UserInfoWrapper,
  ProductContainer,
  ProductWrapper,
  UserPostContainer,
  UserPostWrapper,
} from "./index.style";
import DisplayHandler from "../../../components/DisplayHandler";

const YourProfile = () => {
  return (
    <MainLayOut>
      <UserInfoContainer>
        <UserInfoWrapper></UserInfoWrapper>
      </UserInfoContainer>
      <ProductContainer>
        <ProductWrapper></ProductWrapper>
      </ProductContainer>
      <UserPostContainer>
        <UserPostWrapper>
          <DisplayHandler />
        </UserPostWrapper>
      </UserPostContainer>
    </MainLayOut>
  );
};

export default YourProfile;
