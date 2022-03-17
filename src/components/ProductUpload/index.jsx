import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { imageUploadsHandler } from "../../util/imageUploads";
import { createProduct } from "../../actions/productActions";
import {
  Form,
  ProductUploadFieldSet,
  ProductFormWrapper,
  SubTitle,
  Label,
  UploadBtn,
} from "./index.style";

const ProductUploadForm = () => {
  const [productImage, setProductImage] = useState([]);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const noString = event => {
    const { value } = event.target;
    return value.replace(/[^0-9]/g, "");
  };
  const addComma = event => {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    const { value } = event.target;
    return value.toString().replace(regexp, ",");
  };

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setProductImage(nowImageUrl);
  };

  const onSubmit = async data => {
    try {
      const { itemName, link, itemImage } = data;
      //가격 전처리
      const stringPrice = await getValues("price");
      setValue("price", parseInt(stringPrice.replace(/[^0-9]/g, ""), 10));
      const price = getValues("price");
      //이미지 전처리
      const image = await imageUploadsHandler(itemImage[0]);

      dispatch(createProduct(itemName, price, link, image));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="textHidden">상품 정보 입력창</h2>
      <ProductUploadFieldSet>
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
              name="itemImage"
              id="itemImage"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              className="ir"
              {...register("itemImage", { required: true })}
            ></input>
          </Label>
        </ProductFormWrapper>
        <ProductFormWrapper>
          <label htmlFor="itemName">상품명</label>
          <input
            name="itemName"
            id="itemName"
            type="text"
            placeholder="2~10자 이내여야 합니다."
            autoComplete="off"
            spellCheck="false"
            {...register("itemName", {
              required: true,
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.itemName?.type === "minLength" && (
            <p>*2~10자 이내여야 합니다.</p>
          )}
          {errors.itemName?.type === "maxLength" && (
            <p>*2~10자 이내여야 합니다.</p>
          )}

          <label htmlFor="price">가격</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="숫자만 입력 가능합니다."
            autoComplete="off"
            spellCheck="false"
            {...register("price", {
              required: true,
              onChange: e => {
                setValue("price", noString(e));
              },
              onBlur: e => {
                setValue("price", addComma(e));
              },
            })}
          />
          {errors.price?.type === "pattern" && <p>*숫자만 입력 가능합니다.</p>}
          <label htmlFor="link">판매 링크</label>
          <input
            type="text"
            name="link"
            id="link"
            placeholder="URL을 입력해 주세요."
            autoComplete="off"
            spellCheck="false"
            {...register("link", {
              required: true,
              pattern:
                /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
            })}
          />
          {errors.link && errors.link.type === "pattern" && (
            <p>* URL을 입력해 주세요.</p>
          )}
        </ProductFormWrapper>
        <UploadBtn type="submit" disabled={!isValid}>
          저장
        </UploadBtn>
      </ProductUploadFieldSet>
    </Form>
  );
};

export default ProductUploadForm;
