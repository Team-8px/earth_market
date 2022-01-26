import React from "react";
import styled from "styled-components";
import SellProductLink from "../asset/product-img-example-01.jpg";

const SellProductLayOut = styled.article `
`

const SellProductContainer = styled.ul`
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const SellProductWrapper = styled.li`
  margin-right: 10px;
  cursor: pointer;
`;

const ProductImgWrapper = styled.div`
  border: 0.5px solid #dbdbdb;
  border-radius: 8px;
`;

const SellProductImg = styled.img`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  background-color: #C4C4C4;
`;

const SellProductTitle = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  font-family:'Spoqa Han Sans Neo B';
  margin-bottom: 16px;
`;

const TextWrap = styled.figcaption`
  padding-top: 6px;
`;

const ProductTitle = styled.strong`
  display: block;
  line-height: 18px;
  margin-bottom: 4px;
`;

const ProductPrice = styled.strong`
  display: block;
  font-size: 12px;
  font-family:'Spoqa Han Sans Neo B';
  color: #F26E22;
`;

function SellProduct () {
    return (
        <SellProductLayOut>
          <SellProductTitle>판매 중인 상품</SellProductTitle>
          <SellProductContainer>
            <SellProductWrapper>
              <figure>
                <ProductImgWrapper>
                  <SellProductImg src={SellProductLink} width="100%"/>
                </ProductImgWrapper>
                <TextWrap>
                  <ProductTitle>애월읍 노지 감귤</ProductTitle>
                  <ProductPrice>35,000원</ProductPrice>
                </TextWrap>
              </figure>
            </SellProductWrapper>
            <SellProductWrapper>
              <figure>
                <ProductImgWrapper>
                  <SellProductImg src={SellProductLink} width="100%"/>
                </ProductImgWrapper>
                <TextWrap>
                  <ProductTitle>애월읍 노지 감귤</ProductTitle>
                  <ProductPrice>35,000원</ProductPrice>
                </TextWrap>
              </figure>
            </SellProductWrapper>
            <SellProductWrapper>
              <figure>
                <ProductImgWrapper>
                  <SellProductImg src={SellProductLink} width="100%"/>
                </ProductImgWrapper>
                <TextWrap>
                  <ProductTitle>애월읍 노지 감귤</ProductTitle>
                  <ProductPrice>35,000원</ProductPrice>
                </TextWrap>
              </figure>
            </SellProductWrapper>
          </SellProductContainer>
        </SellProductLayOut>
    );
}

export default SellProduct;