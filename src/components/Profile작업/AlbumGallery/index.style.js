import { Link } from "react-router-dom";
import styled from "styled-components";
import imageLayers from "../../../asset/icon/iccon-img-layers.svg";

export const AlbumItem = styled(Link)`
  cursor: pointer;
  position: relative;
  max-height: 114px;
  min-height: 114px;
  &::before {
    content: "";
    position: absolute;
    right: 6px;
    top: 6px;
    width: 20px;
    height: 20px;
    background: url(${imageLayers}) no-repeat center / contain;
  }
`;

export const AlbumLink = styled.li`
  width: 100%;
  height: 100%;
`;

export const AlbumImg = styled.img`
  margin-bottom: 0;
  height: 100%;
  object-fit: cover;
`;
