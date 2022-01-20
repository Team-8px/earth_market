import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { joinMembership } from "../../../actions/userActions";
import { imageUploadsHandler } from "../../../util/imageUploads";

// 스타일 컴포넌트
import { MainLayOut } from "./index.style";
import { ProfileImgWrapper } from "../../../components/common/image/ProfileImageStyle";
import { FormContainer } from "../../../components/Form";
// 프로필 이미지
import EllipseImg from "../../../asset/Ellipse-1.png";
//import { Main } from "../../../components/MainLayOut";

import {
  EmailPwWrapper,
  ProfileContainer,
} from "./index.style";

/* 나중에 유효성 검사할때 사용해보자!! 

  const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm(); */

const SetMemberShip = () => {
  const [myImage, setMyImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setMyImage(nowImageUrl);
  };

  const onSubmit = async data => {
    const { email, password, username, accountname, profileImg, intro } = data;

    const image = await imageUploadsHandler(profileImg[0]);

    dispatch(joinMembership(email, password, username, accountname, image, intro));
  };

  return (
    <MainLayOut>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProfileContainer>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        </ProfileContainer>
        <ProfileImgWrapper>
        <div>
          <label onChange={previewImage} htmlFor="input-file">
            <img src={EllipseImg} alt="프로필 사진" />
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profileImg"
              {...register("profileImg")}
            ></input>
          </label>
        </div>
        <div>
          {myImage && (
            <div>
              <img src={myImage} alt="미리보기 이미지" />
            </div>
          )}
        </div>
        </ProfileImgWrapper>
        <EmailPwWrapper>
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            {...register("email")}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
        </div>
        </EmailPwWrapper>
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
        <div>
          <button>감귤마켓 시작하기</button>
        </div>
      </form>
    </MainLayOut>
  );
};

//테스트 더미 데이터
const IMG_URL =
  "https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg";

export default SetMemberShip;
