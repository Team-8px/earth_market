import styled from "styled-components";

export const ProductWrapper = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;
export const ProductImgWrapper = styled.div`
  border-radius: 8px;
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
  line-height: 18px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.strong`
  display: block;
  font-size: 12px;
  color: ${props => props.theme.palette["main"]};
  font-weight: 700;
`;
