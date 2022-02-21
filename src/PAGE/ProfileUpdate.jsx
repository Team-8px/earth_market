import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import PrevBtn from "../asset/icon-arrow-left.svg";
import Upload from "../asset/upload-file.png";
import { Button } from "../components/module/button/button";

// 비즈니스 로직
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { updateUserProfile, getUserMyProfile } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";

const ProfileUpdate = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* 헤더필드 영역 */}
      <HeaderFieldSet>
        <HeaderContainer>
          <HeaderLinkImg onClick={() => history.goBack()} src={PrevBtn} />
          <Button width="90px" size="ms" color="#fff">
            저장
          </Button>
        </HeaderContainer>
      </HeaderFieldSet>
      {/* 메인필드 영역 */}
      <MainFieldSet>
        <ProfileImgWrapper>
          <label onChange={previewImage} htmlFor="profileImg">
            <input
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              name="profileImg"
              id="profileImg"
              {...register("profileImg")}
            />
            <img src={isUpdatedImage ? updateImage : image} alt="프로필 사진" />
          </label>
        </ProfileImgWrapper>
        <ProfileFormWrapper>
          <label>
            사용자 이름
            <input
              name="username"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              {...register("username")}
            />
          </label>
          <label>
            계정 ID
            <input
              name="accountname"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              {...register("accountname")}
            />
          </label>
          <label>
            소개
            <input
              name="intro"
              type="text"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              {...register("intro")}
            />
          </label>
        </ProfileFormWrapper>
        <button>안녕 난버튼이야</button>
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
  border-bottom: 0.5px solid #dbdbdb;
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
      padding: 0;
    }
  }
`;

const ProfileFormWrapper = styled.div`
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
    color: ${props => props.theme.palette["black"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    margin-top: 10px;
  }
`;

export default ProfileUpdate;
