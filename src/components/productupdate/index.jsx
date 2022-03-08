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

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const { image, itemName, price, link } = useSelector(
    state => state?.productRead,
  );

  useEffect(() => {
    if (itemName) {
      setValue("itemName", itemName);
    }
  }, [itemName]);

  useEffect(() => {
    if (price) {
      setValue("price", price);
    }
  }, [price]);

  useEffect(() => {
    if (link) {
      setValue("link", link);
    }
  }, [link]);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

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

    setUpdateImage(nowImageUrl);
  };

  const onSubmit = async data => {
    try {
      const { itemImage, itemName, link } = data;
      //가격 전처리
      const stringPrice = await getValues("price");
      setValue("price", parseInt(stringPrice.replace(/[^0-9]/g, ""), 10));
      const price = getValues("price");
      //이미지 전처리
      const image = await imageUploadsHandler(itemImage[0]);

      dispatch(updateProduct(image, itemName, price, link, productId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ProfileImgWrapper>
        <label onChange={previewImage} htmlFor="itemImage">
          <img
            alt="상품 이미지"
            onError={event => (event.target.style.display = "none")}
            onLoad={event => (event.target.style.display = "inline-block")}
            src={updateImage ? updateImage : image}
          />
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            name="itemImage"
            id="itemImage"
            {...register("itemImage" /* { required: true } */)}
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
            required: true,
            minLength: 2,
            maxLength: 10,
            onChange: e => {
              setValue("itemName", e.target.value);
            },
          })}
        />
        {errors.itemName?.type === "minLength" && (
          <p>*2~10자 이내여야 합니다.</p>
        )}
        {errors.itemName?.type === "maxLength" && (
          <p>*2~10자 이내여야 합니다.</p>
        )}
        <label>가격</label>
        <input
          name="price"
          type="text"
          autoComplete="off"
          placeholder="숫자만 입력 가능합니다."
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
