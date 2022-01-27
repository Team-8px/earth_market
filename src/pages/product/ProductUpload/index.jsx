import React from "react";
import { FormContainer } from "../../../components/Form";
// 스타일
import { MainLayOut, FormWrapper } from "./index.style";
import { HeaderButton } from "../../../components/Header";
import ImgRegister from "../../../components/ImgRegister";

const ProductUpload = () => {
  return (
    <>
      <HeaderButton ButtonText={"저장"} />
      <MainLayOut>
        <FormWrapper>
          <ImgRegister subTitleText={"이미지 등록"} />
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
        </FormWrapper>
      </MainLayOut>
    </>
  );
};

export default ProductUpload;
