import React from "react";
import {
  ProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductTextWrapper,
  ProductText,
  ProductPrice,
} from "./index.style";

function ProductCard({ productText, productPrice, img }) {
  return (
    <ProductWrapper>
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
