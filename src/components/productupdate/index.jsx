import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productActions";
import { updateProduct } from "../../actions/productActions";
import { imageUploadsHandler } from "../../util/imageUploads";
import {
  Form,
  ProfileImgWrapper,
  ProductFormWrapper,
  UploadBtn,
} from "./index.style";

const ProductUpdateForm = () => {
  const [updateImage, setUpdateImage] = useState();

  const { productId } = useParams();

  const dispatch = useDispatch();

  const { image, itemName, price, link } = useSelector(
    state => state?.productRead,
  );

  const {
    register,
    getValues,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setUpdateImage(nowImageUrl);
  };

  const onSubmit = async data => {
    const { profileImg, itemName, price, link } = data;

    const image = await imageUploadsHandler(profileImg[0]);

    dispatch(updateProduct(image, itemName, price, link, productId));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ProfileImgWrapper>
        <label onChange={previewImage} htmlFor="profileImg">
          <img
            alt="프로필 이미지"
            onError={event => (event.target.style.display = "none")}
            onLoad={event => (event.target.style.display = "inline-block")}
            src={updateImage ? updateImage : image}
          />
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            name="profileImg"
            id="profileImg"
            {...register("profileImg" /* { required: true } */)}
          />
        </label>
      </ProfileImgWrapper>
      <ProductFormWrapper>
        <label>상품명</label>
        <input
          name="itemName"
          type="text"
          autoComplete="off"
          placeholder="2~10자 이내여야 합니다."
          {...register("itemName", {
            minLength: 2,
            maxLength: 10,
            required: true,
          })}
        />
        {errors.itemName?.type === "minLength" && (
          <p>*2~10자 이내여야 합니다.</p>
        )}
        <label>가격</label>
        <input
          name="price"
          type="text"
          autoComplete="off"
          placeholder="숫자만 입력 가능합니다."
          {...register("price", { required: true, pattern: /^[0-9]*$/ })}
        />
        {errors.price?.type === "pattern" && <p>*숫자만 입력 가능합니다.</p>}
        <label>판매 링크</label>
        <input
          name="link"
          type="text"
          autoComplete="off"
          placeholder="URL을 입력해 주세요."
          {...register("link", {
            required: true,
            pattern:
              /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
          })}
        />
        {errors.link?.type === "pattern" && <p>* URL을 입력해 주세요.</p>}
      </ProductFormWrapper>
      <UploadBtn type="submit" disabled={!isValid}>
        저장
      </UploadBtn>
    </Form>
  );
};

export default ProductUpdateForm;
