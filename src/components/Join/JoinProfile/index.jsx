import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../constants/defaultUrl";
import { joinMembership } from "../../../actions/userActions";
import { imageUploadsHandler } from "../../../util/imageUploads";
import {
  JoinProfileForm,
  JoinProfileTitle,
  SubText,
  JoinProfileFieldSet,
  JoinImgLabel,
  JoinImg,
  JoinImgInput,
  JoinProfileLabel,
  JoinProfileInput,
  InputWrapper,
  ErrorMessage,
  JoinButton,
} from "./index.style";
import ProfileImg from "../../../asset/basic-profile-img.svg";

const JoinProfile = ({ userInfo }) => {
  const [isPreviewImage, setIsPreviewImage] = useState(true);
  const [myImage, setMyImage] = useState("");
  const [accountIdErrorMessage, setAccountIdErrorMessage] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (accountIdErrorMessage) {
      setAccountIdErrorMessage("");
    }
  }, [getValues().accountname]);

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setMyImage(nowImageUrl);

    setIsPreviewImage(false);
  };

  const getAccountNameValid = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const reqData = {
      user: { accountname: getValues().accountname },
    };
    const { data } = await axios.post(
      `${API_URL}/user/accountnamevalid`,
      reqData,
      config,
    );
    return data;
  };

  const onSubmit = async data => {
    try {
      const { username, accountname, profileImg, intro } = data;
      const { email, password } = userInfo;
      const image = await imageUploadsHandler(profileImg[0]);

      if (isValid) {
        try {
          const response = await getAccountNameValid();
          if (response.message === "사용 가능한 계정ID 입니다.") {
            dispatch(
              joinMembership(
                email,
                password,
                username,
                accountname,
                image,
                intro,
              ),
            );
          }
          if (response.message === "이미 가입된 계정ID 입니다.") {
            setAccountIdErrorMessage(response.message);
          }
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const trigger = e => {
    e.target.src = ProfileImg;
  };

  return (
    <JoinProfileForm onSubmit={handleSubmit(onSubmit)}>
      <JoinProfileTitle>프로필 설정</JoinProfileTitle>
      <SubText>나중에 언제든지 변경할 수 있습니다.</SubText>
      <JoinProfileFieldSet>
        <JoinImgLabel onChange={previewImage} htmlFor="profileImg">
          <JoinImg alt="프로필 사진" src={myImage} onError={trigger} />
          <JoinImgInput
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            name="profileImg"
            id="profileImg"
            {...register("profileImg")}
          />
        </JoinImgLabel>
        <InputWrapper>
          <JoinProfileLabel htmlFor="username">
            사용자 이름
            <JoinProfileInput
              name="username"
              id="username"
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
            {errors?.username?.type === "required" && (
              <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
            )}
            {errors.username?.type === "minLength" ||
              (errors.username?.type === "maxLength" && (
                <ErrorMessage>*2~10자 이내여야 합니다.</ErrorMessage>
              ))}
          </JoinProfileLabel>
          <JoinProfileLabel htmlFor="id">
            계정 ID
            <JoinProfileInput
              name="accountname"
              id="accountname"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              autoComplete="off"
              spellCheck="false"
              {...register("accountname", {
                required: true,
                pattern: /^[-._a-z0-9]+$/gi,
              })}
            />
            {errors?.accountname?.type === "required" && (
              <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
            )}
            {errors?.accountname?.type === "pattern" && (
              <ErrorMessage>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</ErrorMessage>
            )}
            {accountIdErrorMessage && <ErrorMessage>{accountIdErrorMessage}</ErrorMessage>}
          </JoinProfileLabel>
          <JoinProfileLabel htmlFor="intro">
            소개
            <JoinProfileInput
              name="intro"
              type="text"
              id="intro"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              autoComplete="off"
              spellCheck="false"
              {...register("intro", {
                required: true,
              })}
            />
            {errors?.intro?.type === "required" && (
              <ErrorMessage>* 필수 입력사항입니다.</ErrorMessage>
            )}
          </JoinProfileLabel>
        </InputWrapper>
        <JoinButton type="submit" disabled={!isValid}>
          어스마켓 시작하기
        </JoinButton>
      </JoinProfileFieldSet>
    </JoinProfileForm>
  );
};

export default JoinProfile;
