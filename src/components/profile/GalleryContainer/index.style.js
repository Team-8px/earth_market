import styled from "styled-components";
import cardOn from "../../../asset/icon/icon-post-list-on.svg";
import cardOff from "../../../asset/icon/icon-post-list-off.svg";
import albumOn from "../../../asset/icon/icon-post-album-on.svg";
import albumOff from "../../../asset/icon/icon-post-album-off.svg";
import prev from "../../../asset/icon-arrow-left.svg";
import more from "../../../asset/icon-more-vertical.svg";

export const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  background-color: #fff;
  padding: 0px 16px 70px;
`;

export const GalleryHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const GalleryHeaderIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 390px;
  width: 100%;
  height: 44px;
  padding-right: 16px;
`;

export const CardGalleryBtn = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  width: 26px;
  height: 26px;
`;
export const GalleryIcon = styled.img.attrs(props => ({
  src: props.alt === "on" ? cardOn : cardOff,
}))`
  width: 100%;
  height: 100%;
`;

export const AlbumGalleryBtn = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  margin-left: 16px;
  width: 26px;
  height: 26px;
`;

export const AlbumIcon = styled.img.attrs(props => ({
  src: props.alt === "on" ? albumOn : albumOff,
}))`
  width: 100%;
  height: 100%;
`;

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 16px 16px 70px;
`;
export const AlbumList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;
