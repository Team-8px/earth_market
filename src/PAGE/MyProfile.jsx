import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/template/common/Navigation";

// 작업완료
import CommonHeader from "../components/common/CommonHeader";
import ProfileContainer from "../components/profile/ProfileContainer";
import ProductContainer from "../components/profile/ProductContainer";
import GalleryContainer from "../components/profile/GalleryContainer";

const MyProfile = () => {
  // 좋아요
  const [isLikeAction, setLikeAction] = useState(false);
  console.log(isLikeAction && isLikeAction, "isLikeAction");
  const likeAction = () => setLikeAction(!isLikeAction);
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
      <Navigation />
    </>
  );
};

const MainSection = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette["bg"]};
`;

export default MyProfile;
