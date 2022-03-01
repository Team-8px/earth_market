import React, { useState } from "react";
import {
  GallerySection,
  GalleryHeader,
  GalleryHeaderIconWrapper,
  CardGalleryBtn,
  GalleryIcon,
  AlbumGalleryBtn,
  AlbumIcon,
} from "./index.style";

function GalleryContainer() {
  const [gallery, setGallery] = useState(true);
  const galleryHandler = () => {
    setGallery(!gallery);
  };
  return (
    <>
      <PostSection>
        {/* Header Part */}
        <PostHeader>
          <PostHeaderIconWrapper>
            <CardGalleryBtn onClick={galleryHandler} disabled={gallery}>
              {gallery ? <GalleryIcon alt="on" /> : <GalleryIcon alt="off" />}
            </CardGalleryBtn>
            <AlbumGalleryBtn onClick={galleryHandler} disabled={!gallery}>
              {gallery ? <AlbumIcon alt="off" /> : <AlbumIcon alt="on" />}
            </AlbumGalleryBtn>
          </PostHeaderIconWrapper>
        </PostHeader>
        {/* PostPart */}
        {gallery
          ? [1, 2, 3].map(cardpost => (
              <div>모든 게시물 카드를 보여줄겁니다</div>
            ))
          : [1, 2, 3].map(albumpost => (
              <div>이미지 없는 카드는 보여주지 않을 겁니다.</div>
            ))}
      </PostSection>
    </>
  );
}
export default GalleryContainer;
