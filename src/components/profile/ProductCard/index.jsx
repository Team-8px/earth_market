import React from "react";
import { changeCommaPrice } from "../../../util/markingPriceFormat";
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
        <ProductPrice>{changeCommaPrice(productPrice)}</ProductPrice>
      </ProductTextWrapper>
    </ProductWrapper>
  );
}

export default ProductCard;
