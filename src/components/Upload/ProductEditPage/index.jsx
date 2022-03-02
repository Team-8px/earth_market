import React, { useEffect, useState } from "react";

// 스타일로직
import basicImg from "../../../asset/basic-profile-img.png";
import {
  Form,
  ProfileImgWrapper,
  ProductFormWrapper,
  // ProfileUserImg,
  UploadBtn
} from "./index.style";

// 비즈니스 로직
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../actions/productActions";
import { updateProduct } from "../../../actions/productActions";
import { imageUploadsHandler } from "../../../util/imageUploads";

const ProductUpdate = () => {
  const [nextPage, setNextPage] = useState(true);
  const { register, handleSubmit, formState: { errors, isValid }} = useForm({
    mode: "onChange",
  });

  const nextPageHandler = () => {
    setNextPage(false);
  };

  const dispatch = useDispatch();

  //updateImage 업데이트한 사진, 이미지 변경 여부를 따지고, 미리보기 사진을 변경
  const [updateImage, setUpdateImage] = useState([]);

  /* 
  이미지 업데이트 여부 isUpdatedImage 활용예시
  <img src={isUpdatedImage ? updateImage : image} />"
  */
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);

  // 상품 아이디를 파라미터로 받아옴
  const { productId } = useParams();

  //수정 전 상품정보 미리보기 하기 위해 store에서 가져옴
  const { itemName, price, link, image } = useSelector(
    state => state.productRead,
  );

  useEffect(() => {
    //수정 전 상품정보 가져오는 API
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  // 이미지 미리 보기
  //<label onChange={previewImage} htmlFor="itemImg"><Input /></label>
  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setUpdateImage(nowImageUrl);

    setIsUpdatedImage(true);
  };

  /* 상품 정보 수정하기 */
  const onSubmit = async data => {
    const { profileImg, itemName, price, link, productId } = data;
    console.log(data, "입력값");
    const image = await imageUploadsHandler(profileImg[0]);
    
    dispatch(updateProduct(image, itemName, price, link, productId));
  };

  const trigger = e => {
    e.target.src = basicImg;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImgWrapper>
          <label onChange={previewImage} htmlFor="profileImg">
            <img
              alt="프로필 이미지"
              src={image || basicImg}
              onError={e => {
                  trigger(e);
                }} />
            <input
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              name="profileImg"
              id="profileImg"
              {...register("profileImg")}
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
            {...register("itemName", {required: true, minLength: 2, maxLength: 10,})}
          />
          {errors.itemName?.type ==="minLength" && (<p>*2~10자 이내여야 합니다.</p>)}
          {errors.itemName?.type ==="maxLength" && (<p>*2~10자 이내여야 합니다.</p>)}
          <label>가격</label>
          <input
            name="price"
            type="text"
            autoComplete="off"
            placeholder="숫자만 입력 가능합니다."
            {...register("price", {required: true, pattern: /^[0-9]*$/ })}
          />
          {errors.price?.type === "pattern" && (<p>*숫자만 입력 가능합니다.</p>)}
          <label>판매 링크</label>
          <input
            name="link"
            type="text"
            autoComplete="off"
            placeholder="URL을 입력해 주세요."
            {...register("link", {required: true})}
          />
        </ProductFormWrapper>
        <UploadBtn 
          type="submit"
          onClick={nextPageHandler}
          disabled={!isValid}
          >
            저장
          </UploadBtn>
    </Form>
  );
};

export default ProductUpdate;
