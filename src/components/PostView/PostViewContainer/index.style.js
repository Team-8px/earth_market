import styled, { css } from "styled-components";
import more from "../../../asset/icon-more-vertical.svg";

export const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
  ${props =>
    props.center &&
    css`
      justify-content: center;
    `}
  position: fixed;
  height: calc(100% - 108px);
  overflow-y: scroll;
  width: 100%;
  min-width: 100%;
`;

export const Container = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  padding: 20px 0 24px;
`;

export const ContentBox = styled.section`
  padding-left: 54px;
`;

export const ContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

export const ItemWrapper = styled.li`
  min-width: 304px;
  width: 100%;
  max-height: 228px;
  min-height: 228px;
  border: 0.5px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 16px;
  }
`;

export const BtnList = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);

  button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

export const MoreBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${more}) no-repeat center / 18px 18px;
  background-color: inherit;
`;
