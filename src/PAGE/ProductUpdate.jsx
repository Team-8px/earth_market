import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getProduct } from "../actions/productActions";
import { updateProduct } from "../actions/productActions";
import { imageUploadsHandler } from "../util/imageUploads";

const ProductUpdate = () => {
  const { register, handleSubmit } = useForm();
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
    const { itemImg, itemName, price, link } = data;

    const image = await imageUploadsHandler(itemImg[0]);
    // 이미지 파일 변환 잘됬는지 확인
    console.log(image, "productImg 확인");

    console.log(image, itemName, price, link, productId, "입력데이터 확인");
    // 상품 수정 API
    dispatch(updateProduct(image, itemName, price, link, productId));
  };
  return (
    <>
      <h1>ProductUpdate</h1>
      <h1>ProductUpdate</h1>
    </>
  );
};

export default ProductUpdate;
