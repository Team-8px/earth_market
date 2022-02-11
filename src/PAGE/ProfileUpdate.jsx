import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 스타일로직
import ProfileUpload from "../components/module/profile/ProfileIUpload";
import { HeaderButton } from "../components/template/common/Header";
import Upload from "../asset/upload-file.png";
// 비즈니스 로직
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { updateUserProfile, getUserMyProfile } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";

const ProfileUpdate = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  // updateImage 업데이트한 사진, 이미지 변경 여부를 따지고, 미리보기 사진을 변경
  const [updateImage, setUpdateImage] = useState([]);
  console.log(updateImage);
  /* 
  이미지 업데이트 여부 isUpdatedImage 활용예시
  <img src={isUpdatedImage ? updateImage : image} />"
  */
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);

  //나의 프로필을 리덕스 스토어에서 가져오기
  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
  );

  // /gh/profile/my/update

  useEffect(() => {
    // 나의 프로필 가져오기 API
    dispatch(getUserMyProfile());
  }, [dispatch]);

  // 이미지 미리 보기
  //<label onChange={previewImage} htmlFor="itemImg"><Input /></label>
  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    console.log(nowSelectImageList);

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    console.log(nowImageUrl);

    setUpdateImage(nowImageUrl);

    setIsUpdatedImage(true);
  };

  const onSubmit = async data => {
    const { profileImg, username, accountname, intro } = data;

    console.log(profileImg);
    console.log(username);
    console.log(accountname);
    console.log(intro);

    const image = await imageUploadsHandler(profileImg[0]);
    console.log(image, "image 전처리 후");
    // dispatch(updateUserProfile(image, username, accountname));
  };

  return (
    <>
      <HeaderButton buttonText={"저장"} />
      <LayOut>
        <FormLayOut>
          <ProfileImgWrapper>
            <label onChange={previewImage} htmlFor="profileImg">
              <input
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                name="profileImg"
                id="profileImg"
                {...register("profileImg")}
              ></input>
              <img
                src={isUpdatedImage ? updateImage : image}
                alt="프로필 사진"
              />
            </label>
          </ProfileImgWrapper>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <ProfileFormWrapper>
              <label>사용자 이름</label>
              <input
                name="username"
                type="text"
                placeholder="2~10자 이내여야 합니다."
                {...register("username")}
              />
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <label>계정 ID</label>
              <input
                name="accountname"
                type="text"
                placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                {...register("accountname")}
              />
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <label>소개</label>
              <input
                name="intro"
                type="text"
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                {...register("intro")}
              />
            </ProfileFormWrapper>
            <button>안녕 난버튼이야</button>
          </FormContainer>
        </FormLayOut>
      </LayOut>
    </>
  );
};

const LayOut = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const ProfileImgWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 16px;

  label {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    margin: 0 auto 30px;
    border: 1px solid #dbdbdb;
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
      // 기본값
      padding: 0;
    }
  }
`;

const FormLayOut = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;

const FormContainer = styled.form`
  box-sizing: border-box;
`;

const ProfileFormWrapper = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;

  label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: #dbdbdb;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
  }
`;

export default ProfileUpdate;
