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
import CardGallery from "../CardGallery";
import AlbumGallery from "../AlbumGallery";

function GalleryContainer() {
  const [gallery, setGallery] = useState(true);
  const galleryHandler = () => {
    setGallery(!gallery);
  };
  return (
    <>
      <GallerySection>
        {/* Header Part */}
        <GalleryHeader>
          <GalleryHeaderIconWrapper>
            <CardGalleryBtn onClick={galleryHandler} disabled={gallery}>
              {gallery ? <GalleryIcon alt="on" /> : <GalleryIcon alt="off" />}
            </CardGalleryBtn>
            <AlbumGalleryBtn onClick={galleryHandler} disabled={!gallery}>
              {gallery ? <AlbumIcon alt="off" /> : <AlbumIcon alt="on" />}
            </AlbumGalleryBtn>
          </GalleryHeaderIconWrapper>
        </GalleryHeader>
        {/* PostPart */}
        {gallery
          ? [1, 2, 3].map(cardpost => <CardGallery />)
          : [1, 2, 3].map(albumpost => (
              <AlbumGallery>
                이미지 없는 카드는 보여주지 않을 겁니다.
              </AlbumGallery>
            ))}
      </GallerySection>
    </>
  );
}
export default GalleryContainer;
