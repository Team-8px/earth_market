import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createProduct } from "../../../actions/productActions";
import { imageUploadsHandler } from "../../../util/imageUploads";

const ProductUpload = () => {
  const [productImage, setProductImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setProductImage(nowImageUrl);
  };

  const onSubmit = async data => {
    const { itemName, price, link, itemImage } = data;

    const image = await imageUploadsHandler(itemImage[0]);

    dispatch(createProduct(itemName, Number(price), link, image));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>이미지 등록</h3>
        <Link to="/gh/profile/my">이전 페이지</Link>
        <br />
        <br />
        <br />
        <div>
          <label onChange={previewImage} htmlFor="productImg">
            <input
              type="file"
              id="productImg"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="itemImage"
              {...register("itemImage")}
            ></input>
          </label>
        </div>

        <div>
          {productImage && (
            <div>
              <img
                style={{ height: "100px", width: "100px" }}
                src={productImage}
                alt="미리보기 이미지"
              />
            </div>
          )}
        </div>

        <br />
        <br />
        <br />

        <div>
          <label>상품명</label>
          <input
            name="itemName"
            type="text"
            placeholder="2~15자 이내여야 합니다."
            {...register("itemName")}
          />
        </div>

        <div>
          <label>가격</label>
          <input
            name="price"
            type="number"
            placeholder="숫자만 입력 가능합니다."
            {...register("price")}
          />
        </div>

        <div>
          <label>판매 링크</label>
          <input
            name="link"
            type="text"
            placeholder="URL을 입력해 주세요."
            {...register("link")}
          />
        </div>
        <div>
          <button>저장</button>
        </div>
      </form>
    </>
  );
};

export default ProductUpload;
