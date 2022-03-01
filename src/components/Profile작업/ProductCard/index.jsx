import React from "react";
import {
  ProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductTextWrapper,
  ProductText,
  ProductPrice,
} from "./index.style";

function ProductCard({ productText, productPrice, img, onClick }) {
  return (
    <ProductWrapper onClick={onClick}>
      <ProductImgWrapper>
        <ProductImg src={img} />
      </ProductImgWrapper>
      <ProductTextWrapper>
        <ProductText>{productText}</ProductText>
        <ProductPrice>{productPrice}</ProductPrice>
      </ProductTextWrapper>
    </ProductWrapper>
  );
}

export default ProductCard;
