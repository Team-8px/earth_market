import React from "react";
import { AlbumItem, AlbumLink, AlbumImg } from "./index.style";

function AlbumGallery({ postImages, Link }) {
  const imgErrorHandler = e => {
    const target = e.target.parentNode.parentNode;
    target.style.display = "none";
  };
  return (
    <AlbumItem to={Link}>
      <AlbumLink>
        <AlbumImg src={postImages} onError={imgErrorHandler} />
      </AlbumLink>
    </AlbumItem>
  );
}
export default AlbumGallery;
