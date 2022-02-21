import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// 스타일로직
import PrevBtn from "../asset/icon-arrow-left.svg";
import UploadProfile from "../components/module/upload/UploadProfile";
import { Button } from "../components/module/button/button";
import ImgIcon from "../asset/icon/icon-upload.png";

// 비즈니스 로직
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { imageUploadsHandler } from "../util/imageUploads";
import { createProduct } from "../actions/productActions";

const ProductUpload = () => {
  const [productImage, setProductImage] = useState([]);

  const [isPreviewImage, setIsPreviewImage] = useState(true);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const history = useHistory();

  // 이미지 미리 보기
  //<label onChange={previewImage} htmlFor="itemImg"><Input /></label>
  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setProductImage(nowImageUrl);
    setIsPreviewImage(false);
  };

  const onSubmit = async data => {
    const { itemName, price, link, itemImage } = data;

    const image = await imageUploadsHandler(itemImage[0]);

    //API 상품등록
    dispatch(createProduct(itemName, Number(price), link, image));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* 헤더필드 영역 */}
      <HeaderFieldSet>
        <HeaderContainer>
          <HeaderLinkImg onClick={() => history.goBack()} src={PrevBtn} />
          <Button width="90px" size="ms" color="#fff">
            저장
          </Button>
        </HeaderContainer>
      </HeaderFieldSet>
      {/* 메인필드 영역 */}
      <MainFieldSet>
        {/* <Container> */}
          <SubTitle>이미지 업로드</SubTitle>
          <ProductFormWrapper>
          <Label onChange={previewImage} htmlFor="itemImage">
            <img
              src={productImage}
              onError={event => (event.target.style.display = "none")}
              onLoad={event => (event.target.style.display = "inline-block")}
              alt="상품 사진"
            />
            <input
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              name="itemImage"
              id="itemImage"
              className="ir"
              {...register("itemImage")}
            ></input>
          </Label>
        </ProductFormWrapper>
        {/* </Container> */}
        <ProductFormWrapper>
          <label>상품명</label>
          <input
            name="itemName"
            type="text"
            {...register("itemName")}
            placeholder="2~10자 이내여야 합니다."
            autoComplete="off"
            spellCheck="false" />
          <label>가격</label>
          <input
            name="price"
            type="text"
            {...register("price")}
            placeholder="숫자만 입력 가능합니다."
            autoComplete="off"
            spellCheck="false" />
          <label>판매 링크</label>
          <input
            name="link"
            type="text"
            {...register("link")}
            placeholder="URL을 입력해 주세요."
            autoComplete="off"
            spellCheck="false" />
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
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    caret-color: ${props => props.theme.palette["main"]};
  
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 18px;
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 204px;
  background-color: ${props => props.theme.palette["bg"]};
  border: 0.5 solid ${props => props.theme.palette["border"]};
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  img {
    background: no-repeat center / contain;
  }
  &::after {
    position: absolute;
    right: 12px;
    bottom: 12px;
    content: "";
    width: 36px;
    height: 36px;
    background: ${props => props.theme.palette["lightGray"]} url(${ImgIcon})
      no-repeat center / 22px 22px;
    border-radius: 50%;
  }
`;

/* const ProfileImgWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 16px;

  label {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    margin: 0 auto 30px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      width: 36px;
      height: 36px;

      border-radius: 50%;
    }

    img {
      width: 110px;
      height: 110px;
    }

    input {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
      // 기본값
      padding: 0;
    }
  }
`; */

export default ProductUpload;