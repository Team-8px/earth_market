import React from "react";
import styled from "styled-components";
import ProductForm from "../../module/form/ProductForm";
import UploadProfile from "../../module/upload/UploadProfile";
import { HeaderButton } from "../common/Header";

const ProductUpload = () => {
  return (
    <>
      <HeaderButton buttonText={"저장"} />
      <LayOut>
        <FormContainerSection>
          <UploadProfile subTitleText={"이미지 업로드"}></UploadProfile>
          {/* <ProductForm></ProductForm> */}
          <FormContainer>
            <ProductFormWrapper>
              <label>상품명</label>
              <input placeholder="2~10자 이내여야 합니다." />
            </ProductFormWrapper>
            <ProductFormWrapper>
              <label>가격</label>
              <input placeholder="숫자만 입력 가능합니다." />
            </ProductFormWrapper>
            <ProductFormWrapper>
              <label>판매 링크</label>
              <input placeholder="URL을 입력해 주세요." />
            </ProductFormWrapper>
          </FormContainer>
        </FormContainerSection>
      </LayOut>
    </>
  );
};

const LayOut = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const FormContainerSection = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;

const FormContainer = styled.form`
  box-sizing: border-box;
`;

const ProductFormWrapper = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;

  label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    font-color: #dbdbdb;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }
`;

export default ProductUpload;
