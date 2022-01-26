import React, { useState } from "react";
import { FormContainer } from "../../../components/Form";
// 스타일
import {
  MainFormContainer,
  ProductImgWrapper,
  MainLayOut,
} from "./index.style";
import { HeaderButton } from "../../../components/Header";

const ProductUpload = () => {
  return (
    <MainLayOut>
      <MainFormContainer>
        <HeaderButton />
        <form>
          <ProductImgWrapper>
            <label>
              <input></input>
            </label>
          </ProductImgWrapper>

          <FormContainer>
            <div>
              <label>상품명</label>
              <input placeholder="2~15자 이내여야 합니다." />
            </div>
          </FormContainer>
          <FormContainer>
            <div>
              <label>가격</label>
              <input placeholder="숫자만 입력 가능합니다." />
            </div>
          </FormContainer>
          <FormContainer>
            <div>
              <label>판매 링크</label>
              <input placeholder="URL을 입력해 주세요." />
            </div>
          </FormContainer>
        </form>
      </MainFormContainer>
    </MainLayOut>
  );
};

export default ProductUpload;
