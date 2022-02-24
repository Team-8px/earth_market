import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { joinMembership } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";
import { API_URL } from "../constants/defaultUrl";
//스타일
import ProfileForm from "../components/module/form/ProfileForm";
import ProfileUpload from "../components/module/profile/ProfileIUpload";
import EllipseImg from "../asset/Ellipse 6.png";
import { Button } from "../components/module/button/button";
import Upload from "../asset/upload-file.svg";
// import LoginTitle from "../components/module/title/LoginTitle";
import { updateUserProfile } from "../actions/userActions";
import ProfileImg from "../asset/icon/basic-profile.svg";
import theme from "../styles/theme";

const JoinProfile = () => {
  const [isPreviewImage, setIsPreviewImage] = useState(true);
  const [nextPage, setNextPage] = useState(true);
  const [myImage, setMyImage] = useState([]);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const nextPageHandler = async () => {
    if (isValid) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const reqData = {
        user: { email: getValues().email },
      };
      const { data } = await axios.post(
        `${API_URL}/user/emailvalid`,
        reqData,
        config,
      );
      console.log(data);
      if (data.message === "사용 가능한 이메일 입니다.") {
        setNextPage(false);
      }
      if (data.message === "이미 가입된 이메일 주소 입니다.") {
        setEmailErrorMessage(data.message);
      }
    }
  };

  const previewImage = e => {
    const nowSelectImageList = e.target.files;
    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);
    console.log(nowImageUrl);
    setMyImage(nowImageUrl);
    setIsPreviewImage(false);
  };

  const onSubmit = async data => {
    const { email, password, username, accountname, profileImg, intro } = data;
    console.log(data, "입력값");
    const image = await imageUploadsHandler(profileImg[0]);
    if (isValid) {
      if (data.message === "사용 가능한 이메일 입니다.") {
        setNextPage(false);
      }
      if (data.message === "이미 가입된 이메일 주소 입니다.") {
        setEmailErrorMessage(data.message);
      }

      dispatch(
        joinMembership(email, password, username, accountname, image, intro),
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {nextPage ? (
        <MainFieldSet>
          <Title>이메일로 회원가입</Title>
          <h1>{`${isValid}`}</h1>
          <InputWrapper>
            <label>
              이메일
              <input
                name="email"
                type="email"
                placeholder="이메일 주소를 입력해 주세요."
                autoComplete="off"
                spellCheck="false"
                {...register("email", {
                  required: true,
                  /* pattern: /^\S+@\S+$/i, */
                  pattern: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                })}
              />
              {errors.email?.type === "pattern" && (
                <p>*올바르지 않은 이메일 형식입니다.</p>
              )}
              {errors.email?.type === undefined && getValues().email && (
                <p>{emailErrorMessage}</p>
              )}
            </label>

            <label>
              비밀번호
              <input
                name="password"
                type="password"
                spellCheck="false"
                placeholder="비밀번호를 설정해 주세요."
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "minLength" && (
                <p>*비밀번호는 6자 이상이어야 합니다.</p>
              )}
            </label>
          </InputWrapper>{" "}
          <Button
            type="button"
            width="322px"
            size="lg"
            onClick={nextPageHandler}
            isValid={isValid}
          >
            다음
          </Button>
        </MainFieldSet>
      ) : (
        <MainFieldSet>
          <Title>
            프로필 설정
            <SubText>나중에 언제든지 변경할 수 있습니다.</SubText>
          </Title>
          <h1>{`${isValid}`}</h1>
          <ProfileImgWrapper isPreviewImage={isPreviewImage} myImage={myImage}>
            <label onChange={previewImage} htmlFor="profileImg">
              <img alt="프로필 사진" className="ir" />
              <input
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                name="profileImg"
                id="profileImg"
                {...register("profileImg")}
              />
            </label>
          </ProfileImgWrapper>
          <InputWrapper>
            <label>
              사용자 이름
              <input
                name="username"
                type="text"
                placeholder="2~10자 이내여야 합니다."
                autoComplete="off"
                spellCheck="false"
                {...register("username", {
                  required: true,
                  minLength: 2,
                  maxLength: 10,
                })}
              />
              {errors.username?.type === "minLength" ||
                (errors.username?.type === "maxLength" && (
                  <p>*2~10자 이내여야 합니다.</p>
                ))}
            </label>

            <label>
              계정 ID
              <input
                name="accountname"
                type="text"
                placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                autoComplete="off"
                spellCheck="false"
                {...register("accountname", {
                  required: true,
                  pattern: /^[-._a-z0-9]+$/gi,
                })}
              />
              {errors.accountname?.type === "pattern" && (
                <p>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</p>
              )}
            </label>

            <label>
              소개
              <input
                name="intro"
                type="text"
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                autoComplete="off"
                spellCheck="false"
                {...register("intro")}
              />
            </label>
          </InputWrapper>
          <Button type="submit" width="322px" size="lg" isValid={isValid}>
            어스마켓 시작하기
          </Button>
        </MainFieldSet>
      )}
    </Form>
  );
};

const Form = styled.form`
  box-sizing: border-box;
  margin-top: 30px;
`;

const MainFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 322px;
  margin: 40px 0 14px;
  label {
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding: 10px 0 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    caret-color: ${props => props.theme.palette["main"]};
    &::placeholder {
      color: ${theme.palette["border"]};
    }
    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
  }
  p {
    color: #eb5757;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
  }
`;

const ProfileImgWrapper = styled.div`
  margin-top: 30px;
  label {
    position: relative;
    display: block;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    cursor: pointer;
    background: url(${props =>
        props?.isPreviewImage ? ProfileImg : props?.myImage})
      no-repeat center / contain;
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
      border-radius: 50%;
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
    color: ${props => props.theme.palette["border"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
  }
`;

const PwWrapper = styled.div`
  width: 322px;
  height: 48px;
  margin-bottom: 16px;
  label {
    display: block;
    color: ${props => props.theme.palette["subText"]};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
`;

const SubText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.palette["subText"]};
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
`;

export default JoinProfile;
