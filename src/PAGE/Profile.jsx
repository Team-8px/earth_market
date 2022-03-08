import React from "react";
import styled from "styled-components";
import Navbar from "../components/common/Navbar";
import CommonHeader from "../components/common/CommonHeader";
import ProfileContainer from "../components/profile/ProfileContainer";
import ProductContainer from "../components/profile/ProductContainer";
import GalleryContainer from "../components/profile/GalleryContainer";

const Profile = () => {
  return (
    <>
      <CommonHeader />
      <MainSection>
        {/* 유저 프로필 */}
        <ProfileContainer />
        {/* 상품 */}
        <ProductContainer />
        {/* 게시글 */}
        <GalleryContainer />
      </MainSection>
      <Navbar />
    </>
  );
};

const MainSection = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette["bg"]};
`;

export default Profile;
