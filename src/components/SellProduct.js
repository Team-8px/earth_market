import React from "react";
import styled from "styled-components";
import SellProductLink from "../asset/unsplash_4XoCxdMnWFg.jpg";

const SellProductContainer = styled.div`
  /* display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px; */
`;

const SellProductImg = styled.img`
  /* display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 16px; */
  width: 140px;
  height: 90px;
  border-radius: 8px;
  background-color: #C4C4C4;
  /* background-image: url('../asset/unsplash_4XoCxdMnWFg.jpg' center ); */
`;

const SellProductTitle = styled.h2`
  font-size: 16px;
  font-family:'Spoqa Han Sans Neo B';
  margin-bottom: 16px;
`;

const ProductTitle = styled.p`
  margin: 6px 0 4px;
`;

const ProductPrice = styled.span`
  /* display: inline-block; */
  font-size: 12px;
  font-family:'Spoqa Han Sans Neo B';
  color: #F26E22;
;
`;




function SellProduct () {
    return (
        <article>
            <SellProductTitle>상품 목록</SellProductTitle>
            {/* {products &&
            products.map((product, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <div>
                    <img
                      src={`${API_URL}/${product.itemImage}`}
                      alt="상품사진"
                    />
                  </div>
                  <div>
                    <ul>
                      <li>상품명: {product.itemName}</li>
                      <li>상품가격: {product.price}</li>
                      <li>상품링크: {product.link}</li>
                    </ul>
                  </div>
                </div>
              );
            })} */}
            <SellProductImg src={SellProductLink} width="100%"/>
            <ProductTitle>애월읍 노지 감귤</ProductTitle>
            <ProductPrice>35,000원</ProductPrice>
        </article>
    );
}

export default SellProduct;