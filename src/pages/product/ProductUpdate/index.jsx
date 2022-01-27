import React from "react";
import { MainLayOut } from "./index.style";
import { HeaderButton } from "../../../components/Header";
import { FormContainer } from "../../../components/Form";
import ImgRegister from "../../../components/ImgRegister";
const ProductModification = () => {
  return (
    <>
      <MainLayOut>
        <HeaderButton />
        <form>
          {/* 이미지 등록 */}
          <ImgRegister />
          {/* 상품명 수정 */}
          <FormContainer>
            <div>
              <label>상품명</label>
              <input placeholder="2~15자 이내여야 합니다." />
            </div>
          </FormContainer>
          {/* 가격 수정 */}
          <FormContainer>
            <div>
              <label>가격</label>
              <input placeholder="숫자만 입력 가능합니다." />
            </div>
          </FormContainer>
          {/* 판매링크 수정 */}
          <FormContainer>
            <div>
              <label>판매 링크</label>
              <input placeholder="URL을 입력해 주세요." />
            </div>
          </FormContainer>
        </form>
      </MainLayOut>
    </>
  );
};

export default ProductModification;
