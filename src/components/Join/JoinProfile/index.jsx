import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../../../constants/defaultUrl";
import { joinMembership } from "../../../actions/userActions";
import { imageUploadsHandler } from "../../../util/imageUploads";
import {
  Form,
  MainFieldSet,
  InputWrapper,
  ProfileImgWrapper,
  Title,
  SubText,
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
          console.error(e);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  const trigger = e => {
    e.target.src = ProfileImg;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MainFieldSet>
        <Title>
          프로필 설정
          <SubText>나중에 언제든지 변경할 수 있습니다.</SubText>
        </Title>
        <ProfileImgWrapper>
          <label onChange={previewImage} htmlFor="profileImg">
            <img alt="프로필 사진" src={myImage} onError={trigger} />
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
          <label htmlFor="username">
            사용자 이름
            <input
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
              <p>* 필수 입력사항입니다.</p>
            )}
            {errors.username?.type === "minLength" ||
              (errors.username?.type === "maxLength" && (
                <p>*2~10자 이내여야 합니다.</p>
              ))}
          </label>
          <label htmlFor="id">
            계정 ID
            <input
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
              <p>* 필수 입력사항입니다.</p>
            )}
            {errors?.accountname?.type === "pattern" && (
              <p>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</p>
            )}
            {accountIdErrorMessage && <p>{accountIdErrorMessage}</p>}
          </label>
          <label htmlFor="intro">
            소개
            <input
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
              <p>* 필수 입력사항입니다.</p>
            )}
          </label>
        </InputWrapper>
        <JoinButton type="submit" disabled={!isValid}>
          어스마켓 시작하기
        </JoinButton>
      </MainFieldSet>
      )
    </Form>
  );
};

export default JoinProfile;
