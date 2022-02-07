import React from "react";
import styled from "styled-components";
import ProductForm from "../../module/form/ProductForm";
import UploadProfile from "../../module/upload/UploadProfile";

export default function ProductUpload() {
  return (
    <>
      {/* <Header></Header> */}
      <LayOut>
        <FormContainer>
          <UploadProfile subTitleText={"이미지 업로드"}></UploadProfile>
          <ProductForm></ProductForm>
        </FormContainer>
      </LayOut>
    </>
  );
}

const LayOut = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const FormContainer = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;
