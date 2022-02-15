import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { joinMembership } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";
//스타일
import ProfileForm from "../components/module/form/ProfileForm";
import ProfileUpload from "../components/module/profile/ProfileIUpload";
import LoginTitle, {
  SubTitleTitle,
} from "../components/module/title/LoginTitle";
import { Button } from "../components/module/button/button";
import RegisterForm from "../components/module/form/RegisterForm";
import Upload from "../asset/upload-file.png";
// import LoginTitle from "../components/module/title/LoginTitle";
import { updateUserProfile } from "../actions/userActions";

const JoinProfile = () => {
  const [isButtonStatus, setIsButtonStatus] = useState(true);
  // true

  const [myImage, setMyImage] = useState([]);

  console.log(isButtonStatus && isButtonStatus, "버튼상태");

  const { register, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setMyImage(nowImageUrl);
  };

  //이메일, 비밀번호 입력시 버튼 background color 변경
  /* useEffect(() => {
    const subscription = watch(({ email, password }) => {
      if (email && password) {
        setIsButtonStatus(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [isButtonStatus]); */

  const onSubmit = async data => {
    const { email, password, username, accountname, profileImg } = data;
    console.log(data, "입력값");
    const image = await imageUploadsHandler(profileImg[0]);

    dispatch(joinMembership(email, password, username, accountname, image));
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isButtonStatus ? (
          <MainFieldSet>
            <LoginTitle>이메일로 회원가입</LoginTitle>
            <h1>{isButtonStatus}</h1>
            <EmailWrapper>
              <label>이메일</label>
              <input
                name="email"
                type="email"
                placeholder="이메일 주소를 입력해 주세요."
                {...register("email")}
              />
            </EmailWrapper>
            <PwWrapper>
              <label>비밀번호</label>
              <input
                name="password"
                type="password"
                placeholder="비밀번호를 설정해 주세요."
                {...register("password")}
              />
            </PwWrapper>{" "}
            <Button
              width="322px"
              size="lg"
              off
              onClick={() => setIsButtonStatus(false)}
            >
              다음
            </Button>
          </MainFieldSet>
        ) : (
          <MainFieldSet>
            <LoginTitle>
              프로필 설정
              <SubTitleTitle />
            </LoginTitle>
            <ProfileImgWrapper>
              <label onChange={previewImage} htmlFor="profileImg">
                <img src={myImage} alt="프로필 이미지" />
                <input
                  type="file"
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  name="profileImg"
                  id="profileImg"
                  {...register("profileImg")}
                ></input>
              </label>
            </ProfileImgWrapper>
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
            <Button width="322px" size="lg" off>
              감귤마켓 시작하기
            </Button>
          </MainFieldSet>
        )}
      </Form>
    </>
  );
};
const Form = styled.form`
  box-sizing: border-box;
`;

const MainFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailWrapper = styled.div`
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

const PwWrapper = styled.div`
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

export default JoinProfile;
