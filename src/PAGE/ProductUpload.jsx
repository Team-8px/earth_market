import React, { useState } from "react";
import styled from "styled-components";
 
// 스타일로직
import PrevBtn from "../asset/icon-arrow-left.svg";
import UploadProfile from "../components/module/upload/UploadProfile";
import { Button } from "../components/module/button/button";

// 비즈니스 로직
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../actions/productActions";


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
      <Form onSubmit={handleSubmit(onSubmit)}>            
          {/* 헤더필드 영역 */}
          <HeaderFieldSet>
            <HeaderContainer>
              <HeaderLinkImg src={PrevBtn} />
              <Button width="90px" size="ms" color="#fff">
                저장
              </Button>
            </HeaderContainer>
          </HeaderFieldSet>
          {/* 메인필드 영역 */}
          <MainFieldSet>
            <UploadProfile
            getItem={productImage}
            subTitleText={"이미지 업로드"} />
            <ProductFormWrapper>
              <label>상품명</label>
              <input
                name="itemName"
                type="text"
                {...register("itemName")}
                placeholder="2~10자 이내여야 합니다."
                autoComplete="off" />
              <label>가격</label>
              <input
                name="price"
                type="text"
                {...register("price")}
                placeholder="숫자만 입력 가능합니다."
                autoComplete="off" />
              <label>판매 링크</label>
              <input
                name="link"
                type="text"
                {...register("link")}
                placeholder="URL을 입력해 주세요."
                autoComplete="off" />
            </ProductFormWrapper>
          </MainFieldSet>
      </Form> 
  );
};

const Form = styled.form`
  box-sizing: border-box;
`;
//  메인
const MainFieldSet = styled.fieldset`
  margin: 30px auto;
  max-width: 322px;
  width: 100%;
`;
//  헤더
const HeaderFieldSet = styled.fieldset`
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

const HeaderLinkImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
`;

const ProductFormWrapper = styled.div`
  margin: 0 auto 16px;

  label {
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
    margin-top: 16px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["black"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    caret-color: ${props => props.theme.palette["main"]};
    
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
  }
`;

export default ProductUpload;
