import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// 스타일로직
import PrevBtn from "../asset/icon-arrow-left.svg";
import Upload from "../asset/upload-file.png";
import { Button } from "../components/module/button/button";

// 비즈니스 로직
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getProduct } from "../actions/productActions";
import { updateProduct } from "../actions/productActions";
import { imageUploadsHandler } from "../util/imageUploads";

//
const ProductUpdate = () => {
  const [nextPage, setNextPage] = useState(true);
  const { register, handleSubmit, formState: { errors, isValid }} = useForm({
    mode: "onChange",
  });

  const nextPageHandler = () => {
    setNextPage(false);
  };

  const dispatch = useDispatch();

  const history = useHistory();

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* 헤더필드 영역 */}
      <HeaderFieldSet>
        <HeaderContainer>
          <HeaderLinkImg onClick={() => history.goBack()} src={PrevBtn} />
          <Button 
          type="submit" 
          width="90px" 
          size="ms" 
          color="#fff"
          onClick={nextPageHandler}
          isValid={isValid}
          >
            저장
          </Button>
        </HeaderContainer>
      </HeaderFieldSet>
      {/* 메인필드 영역 */}
      <MainFieldSet>
        <ProfileImgWrapper>
          <label onChange={previewImage} htmlFor="profileImg">
            <img src={isUpdatedImage ? updateImage : image} alt="프로필 사진" />
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
      </MainFieldSet>
    </Form>
  );
};

const Form = styled.form`
  box-sizing: border-box;
`;
//  메인
const MainFieldSet = styled.fieldset`
  margin: 30px auto;
  max-width: 322px;
  width: 100%;
`;
//  헤더
const HeaderFieldSet = styled.fieldset`
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
`;

const HeaderLinkImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
`;

const ProfileImgWrapper = styled.div`
  margin-bottom: 30px;

  label {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    margin: 0 auto;
    border: 1px solid ${props => props.theme.palette["border"]};
    border-radius: 50%;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      width: 36px;
      height: 36px;
      background: #c4c4c4 url(${Upload}) no-repeat center / 36px 36px;
      border-radius: 50%;
    }

    img {
      width: 110px;
      height: 110px;
    }

    input {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
      padding: 0;
    }
  }
`;

const ProductFormWrapper = styled.div`
  margin: 0 auto 16px;

  label {
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
    margin-top: 16px;
  }

  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    caret-color: ${props => props.theme.palette["main"]};

    &::placeholder {
      color: ${props => props.theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
  }
  p{
    color: #EB5757;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
    }
`;

export default ProductUpdate;
