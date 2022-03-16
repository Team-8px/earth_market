import styled from "styled-components";
import cardOn from "../../../asset/icon/icon-post-list-on.svg";
import cardOff from "../../../asset/icon/icon-post-list-off.svg";
import albumOn from "../../../asset/icon/icon-post-album-on.svg";
import albumOff from "../../../asset/icon/icon-post-album-off.svg";

export const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-bottom: 70px;
  border-top: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const GalleryIconList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 390px;
  height: 44px;
`;

export const GalleryIconItem = styled.li`
padding-right: 16px;
`;

export const CardGalleryBtn = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  width: 26px;
  height: 26px;
`;

export const GalleryIcon = styled.img.attrs(props => ({
  src: props.alt === "리스트로 보기" ? cardOn : cardOff,
}))`
  width: 100%;
  height: 100%;
`;

export const AlbumGalleryBtn = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: inherit;
  width: 26px;
  height: 26px;
`;

export const AlbumIcon = styled.img.attrs(props => ({
  src: props.alt === "갤러리로 보기" ? albumOff : albumOn,
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
  padding: 20px 16px 70px;
`;
export const AlbumList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;
