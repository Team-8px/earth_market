import React from "react";
import styled from "styled-components";

const LayOut = styled.section`
  padding-left: 54px;
`;
const ContentText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;
const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
  max-height: 228px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImageList = styled.ul`
  display: flex;
  transition: all 0.4s;
`;

const ItemWrapper = styled.li`
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
const BtnList = styled.div`
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

export function ButtonList({ children }) {
  return <BtnList>{children}</BtnList>;
}
export function ImgList({ children }) {
  return (
    <ImageList>
      <ItemWrapper>{children}</ItemWrapper>
    </ImageList>
  );
}
export function ImgContainer({ children }) {
  return <Container>{children}</Container>;
}
export function ContentBox({ children, content }) {
  return (
    <LayOut>
      <ContentText>{content}</ContentText>
      {children}
    </LayOut>
  );
}
