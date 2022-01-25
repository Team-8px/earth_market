import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../../../actions/productActions";
import { updateProduct } from "../../../actions/productActions";
import { imageUploadsHandler } from "../../../util/imageUploads";

// 유효성검사 로직
//   const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm();

const ProductModification = () => {
  const [updateImage, setUpdateImage] = useState([]);
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);
  const { register, handleSubmit } = useForm();
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { itemName, price, link, image } = useSelector(
    state => state.productRead,
    shallowEqual,
  );

  /* 상품 조회 => 이미지 및 정보 미리보기 */

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

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

    console.log(image, "수정이미지 onSubmit");

    dispatch(updateProduct(image, itemName, price, link, productId));
  };

  return (
    <>
      <p>
        <Link to="/gh/profile/my">돌아가기 링크</Link>
      </p>
      {/* 상품 사진 미리보기 */}
      <div>
        <img
          style={{ height: "100px", width: "100px" }}
          src={isUpdatedImage ? updateImage : image}
          alt="상품 사진"
        />

        <h1>{isUpdatedImage ? updateImage : image}</h1>
      </div>
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 상품 이미지 수정 / 파일 업로드 */}
        <div>
          <label onChange={previewImage} htmlFor="itemImg">
            <input
              id="itemImg"
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="itemImg"
              {...register("itemImg")}
            ></input>
          </label>
        </div>

        {/* 상품명 수정 */}
        <div>
          <input
            name="itemName"
            type="text"
            placeholder="itemName"
            {...register("itemName")}
          />
        </div>

        {/* 가격 수정 */}
        <div>
          <input
            name="price"
            type="text"
            placeholder="price"
            {...register("price")}
          />
        </div>

        {/* 판매링크 수정 */}

        <div>
          <input
            name="link"
            type="text"
            placeholder="link"
            {...register("link")}
          />
        </div>
        <button>저장</button>
      </form>
    </>
  );
};

export default ProductModification;
