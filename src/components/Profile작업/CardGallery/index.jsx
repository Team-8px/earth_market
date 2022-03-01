import React from "react";
import basicImg from "../../../asset/basic-profile-img.png";
import {
  CardGallerySection,
  CardProfileContainer,
  CardProfileImg,
  CardAthorWrapper,
  CardAthorName,
  CardAthorId,
} from "./index.style";

function CardGallery() {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <CardGallerySection>
      {/* 프로필 */}
      <CardProfileContainer>
        <CardProfileImg
          alt="프로필 이미지"
          src={"test" || basicImg}
          onError={e => {
            trigger(e);
          }}
        />
        <CardAthorWrapper>
          <CardAthorName>Name</CardAthorName>
          <CardAthorId>Id</CardAthorId>
        </CardAthorWrapper>
      </CardProfileContainer>
    </CardGallerySection>
  );
}

export default CardGallery;
