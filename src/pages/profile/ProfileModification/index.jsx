import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../../actions/userActions";
import { HeaderButton } from "../../../components/Header";
import { imageUploadsHandler } from "../../../util/imageUploads";

// 스타일 컴포넌트
import { MainLayOut } from "./index.style";
import { ProfileImgWrapper } from "../../../components/common/image/ProfileImageStyle";
import { FormContainer } from "../../../components/Form";
// 프로필 이미지
import EllipseImg from "../../../asset/Ellipse-1.png";


// 유효성검사 로직
//   const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm();

const ProfileModification = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async data => {
    const { profileImg, username, accountname, intro } = data;
    const image = await imageUploadsHandler(profileImg[0]);
    dispatch(updateUserProfile(image, username, accountname, intro));
  };

  return (
    <>
      <HeaderButton />
      <MainLayOut>
        {/* 사용자 프로필 */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileImgWrapper>
        <div>
          <label>
            <img src={EllipseImg} alt="프로필 사진" />
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profileImg"
              {...register("profileImg")}
            ></input>
          </label>
        </div>
        </ProfileImgWrapper>
          {/* 사용자 이름 */}
        <FormContainer>
          <div>
            <label>사용자 이름</label>
            <input
              name="username"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              {...register("username")}
            />
          </div>
        </FormContainer>
          {/* 계정 id */}
        <FormContainer>
          <div>
            <label>계정 ID</label>
            <input
              name="accountname"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              {...register("accountname")}
            />
          </div>
        </FormContainer>
          {/* 소개 */}
        <FormContainer>
          <div>
            <label>소개</label>
            <input
              name="intro"
              type="text"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              {...register("intro")}
            />
          </div>
        </FormContainer>
          <button>update</button>
        </form>
      </MainLayOut>
    </>
  );
};

export default ProfileModification;
