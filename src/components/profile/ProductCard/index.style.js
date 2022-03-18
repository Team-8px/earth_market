import styled from "styled-components";

export const ProductWrapper = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;

export const ProductImgWrapper = styled.figure`
  margin-top: 16px;
`;

export const ProductImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ProductTextWrapper = styled.figcaption`
  padding-top: 6px;
`;

export const ProductText = styled.strong`
  display: block;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.strong`
  display: block;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.2;
  color: ${props => props.theme.palette["main"]};
`;
