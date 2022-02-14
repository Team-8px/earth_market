import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../actions/productActions";
import { imageUploadsHandler } from "../util/imageUploads";
import ProductForm from "../components/module/form/ProductForm";
import UploadProfile from "../components/module/upload/UploadProfile";
import { HeaderButton } from "../components/template/common/Header";

const ProductUpload = () => {
  const [productImage, setProductImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  // 이미지 미리 보기
  //<label onChange={previewImage} htmlFor="itemImg"><Input /></label>
  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setProductImage(nowImageUrl);
  };

  const onSubmit = async data => {
    const { itemName, price, link, itemImage } = data;

    //const image = await imageUploadsHandler(itemImage[0]);

    console.log(itemName, price, link, itemImage, "입력데이터");

    //console.log(image, "이미지파일변환");
    //API 상품등록
    dispatch(
      createProduct(
        itemName,
        Number(price),
        link,
        "https://m.hwabang.net/web/product/big/201910/54f382a63d44b67963f95f546707ae43.jpg",
      ),
    );
  };

  return (
    <>
      {/*  <HeaderButton buttonText={"저장"} /> */}
      <LayOut>
        <FormContainerSection>
          {/* <UploadProfile
            getItem={productImage}
            subTitleText={"이미지 업로드"}
          ></UploadProfile> */}
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <HeaderButton buttonText={"저장"} />
            <ProductFormWrapper>
              <label>상품명</label>
              <input
                name="itemName"
                type="text"
                {...register("itemName")}
                placeholder="2~10자 이내여야 합니다."
              />
            </ProductFormWrapper>
            <ProductFormWrapper>
              <label>가격</label>
              <input
                name="price"
                type="text"
                {...register("price")}
                placeholder="숫자만 입력 가능합니다."
              />
            </ProductFormWrapper>
            <ProductFormWrapper>
              <label>판매 링크</label>
              <input
                name="link"
                type="text"
                {...register("link")}
                placeholder="URL을 입력해 주세요."
              />
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["border"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
  }
`;

export default ProductUpload;
