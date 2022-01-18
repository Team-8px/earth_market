/* 제가 이부분을 잘 몰라서 이렇게 주석 처리 했어요  현길*/


/* import {ProductUpdateForm, ProductUpdateLabel, ProductUpdateInput} from "./index.style"

function ProductUpdate() {
    return (
        <ProductUpdateForm>
            <ProductUpdateLabel>
                <ProductUpdateInput/>
            </ProductUpdateLabel>
        </ProductUpdateForm>
    );
} */

import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../actions/productActions";
import { imageUploadsHandler } from "../../../util/imageUploads";

// 유효성검사 로직
//   const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm();

const ProductModification = () => {
  const { register, handleSubmit } = useForm();
  const { productId } = useParams();
  const dispatch = useDispatch();

  /* 상품 조회 => 이미지 및 정보 미리보기 */

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  /* 상품 정보 수정하기 */
  const onSubmit = async data => {
    const { profileImg, username, accountname, intro } = data;
    const image = await imageUploadsHandler(profileImg[0]);
    //dispatch(updateUserProfile(image, username, accountname, intro));
  };

  return (
    <>
      <br />

      {/* 상품 이미지 수정 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="itemImage"
            {...register("itemImage")}
          ></input>
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
