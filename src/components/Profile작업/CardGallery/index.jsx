import React from "react";
import {
  CardGallerySection,
  CardProfileContainer,
  CardProfileImg,
  CardAthorWrapper,
  CardAthorName,
  CardAthorId,
} from "./index.style";

function CardGallery() {
  return (
    <CardGallerySection>
      {/* 프로필 */}
      <CardProfileContainer>
        <CardProfileImg />
        <CardAthorWrapper>
          <CardAthorName>Name</CardAthorName>
          <CardAthorId>Id</CardAthorId>
        </CardAthorWrapper>
      </CardProfileContainer>
    </CardGallerySection>
  );
}

export default CardGallery;
