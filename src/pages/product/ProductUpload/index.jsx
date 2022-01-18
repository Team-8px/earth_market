import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../../../actions/productActions";
import { imageUploadsHandler } from "../../../util/imageUploads";
import { FormContainer } from "../../../components/Form";
// 스타일
import {
  MainFormContainer,
  ProductImgWrapper,
  MainLayOut,
} from "./index.style";

const ProductUpload = () => {
  const [myImage, setMyImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setMyImage(nowImageUrl);
  };

  const onSubmit = async data => {
    const { itemName, price, link, itemImage } = data;

    const image = await imageUploadsHandler(itemImage[0]);

    dispatch(createProduct(itemName, Number(price), link, image));
  };

  return (
    <MainLayOut>
      <MainFormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductImgWrapper>
            <h3>이미지 등록</h3>
            <label onChange={previewImage} htmlFor="productImg">
              {/* <img src={IMG_URL} alt="상품 업로드 사진" /> */}
              <input
                type="file"
                id="productImg"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                name="itemImage"
                {...register("itemImage")}
              ></input>
            </label>
          </ProductImgWrapper>

          <div>
            {myImage && (
              <div>
                <img src={myImage} alt="미리보기 이미지" />
              </div>
            )}
          </div>

          <br />
          <br />
          <br />
          <FormContainer>
          <div>
          <label>상품명</label>
            <input
              name="itemName"
              type="text"
              placeholder="2~15자 이내여야 합니다."
              {...register("itemName")}
            />
          </div>
          </FormContainer>
          <FormContainer>
          <div>
          <label>가격</label>
            <input
              name="price"
              type="number"
              placeholder="숫자만 입력 가능합니다."
              {...register("price")}
            />
          </div>
          </FormContainer>
          <FormContainer>
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
          </FormContainer>
        </form>
      </MainFormContainer>
    </MainLayOut>
  );
};

//테스트 더미 데이터
// const IMG_URL =
//   "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118928_960_720.png";

export default ProductUpload;
