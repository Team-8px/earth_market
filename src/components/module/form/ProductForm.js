import React from "react";
import styled from "styled-components";

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

function ProductForm() {

return (
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
    );
}

export default ProductForm;