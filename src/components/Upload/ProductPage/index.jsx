import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Form, MainFieldSet, ProductFormWrapper, SubTitle, Label, UploadBtn } from "./index.style";

// 비즈니스 로직
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { imageUploadsHandler } from "../../../util/imageUploads";
import { createProduct } from "../../../actions/productActions";

const ProductEditPage = () => {
  const [productImage, setProductImage] = useState([]);

  /* const [isPreviewImage, setIsPreviewImage] = useState(true); */
  const [nextPage, setNextPage] = useState(true);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange",
  });

  const nextPageHandler = () => {
    setNextPage(false);
  };

  const dispatch = useDispatch();

  // const history = useHistory();

  // 이미지 미리 보기
  //<label onChange={previewImage} htmlFor="itemImg"><Input /></label>
  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setProductImage(nowImageUrl);
    /*  setIsPreviewImage(false); */
  };

  const onSubmit = async data => {
    const { itemName, price, link, itemImage } = data;

    const image = await imageUploadsHandler(itemImage[0]);

    //API 상품등록
    dispatch(createProduct(itemName, Number(price), link, image));
  };

  // 3자리 마다 콤마
  //   const { getValues } = useForm({
  //     mode: 'all',
  // });

  //   const [num, setNum] = useState('');

  //   const inputPriceFormat = (str) => {
  //     const comma = (str) => {
  //       str = String(str);
  //       return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  //     };
  //     const uncomma = (str) => {
  //       str = String(str);
  //       return str.replace(/[^\d]+/g, "");
  //     };
  //     return comma(uncomma(str));
  //   };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MainFieldSet>
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
              {...register("itemImage", { required: true })}
            ></input>
          </Label>
        </ProductFormWrapper>
        <ProductFormWrapper>
          <label htmlFor="itemName">상품명</label>
          <input
            type="text"
            name="itemName"
            id="itemName"
            placeholder="2~10자 이내여야 합니다."
            autoComplete="off"
            spellCheck="false"
            {...register("itemName", { required: true, minLength: 2, maxLength: 10, })}
          />
          {errors.itemName?.type === "minLength" && (<p>*2~10자 이내여야 합니다.</p>)}
          {errors.itemName?.type === "maxLength" && (<p>*2~10자 이내여야 합니다.</p>)}
          <label htmlFor="price">가격</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="숫자만 입력 가능합니다."
            autoComplete="off"
            spellCheck="false"
            {...register("price", { required: true, pattern: /^[0-9]*$/ })}
          />
          {errors.price?.type === "pattern" && (<p>*숫자만 입력 가능합니다.</p>)}
          <label htmlFor="link">판매 링크</label>
          <input
            type="text"
            name="link"
            id="link"
            placeholder="URL을 입력해 주세요."
            autoComplete="off"
            spellCheck="false"
            {...register("link", { required: true })}
          />
        </ProductFormWrapper>
        <UploadBtn
          type="submit"
          onClick={nextPageHandler}
          isValid={isValid}
        >
          저장
        </UploadBtn>
      </MainFieldSet>
    </Form>
  );
};

export default ProductEditPage;