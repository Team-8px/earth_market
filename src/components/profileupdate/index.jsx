import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import { updateUserProfile, getUserProfile } from "../../actions/userActions";
import { imageUploadsHandler } from "../../util/imageUploads";
import { API_URL } from "../../constants/defaultUrl";
import {
  Form,
  ProfileImgWrapper,
  ProductFormWrapper,
  UploadBtn,
} from "./index.style";

const ProfileUpdateForm = () => {
  const [updateImage, setUpdateImage] = useState();
  const [accountIdErrorMessage, setAccountIdErrorMessage] = useState("");

  const dispatch = useDispatch();

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const { image, username, accountname, intro } = useSelector(
    state => state.userReadProfile,
  );

  useEffect(() => {
    if (username) {
      setValue("username", username);
    }
  }, [username]);

  useEffect(() => {
    if (accountname) {
      setValue("accountname", accountname);
    }
  }, [accountname]);

  useEffect(() => {
    if (intro) {
      setValue("intro", intro);
    }
  }, [intro]);

  useEffect(() => {
    if (accountIdErrorMessage) {
      setAccountIdErrorMessage("");
    }
  }, [getValues().accountname]);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setUpdateImage(nowImageUrl);
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
      const { profileImg, username, accountname, intro } = data;
      const image = await imageUploadsHandler(profileImg[0]);
      if (isValid) {
        try {
          const response = await getAccountNameValid();
          console.log(response);
          if (response.message === "사용 가능한 계정ID 입니다.") {
            dispatch(
              updateUserProfile(image && image, username, accountname, intro),
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ProfileImgWrapper>
        <label onChange={previewImage} htmlFor="profileImg">
          <img
            alt="상품 이미지"
            onError={event => (event.target.style.display = "none")}
            onLoad={event => (event.target.style.display = "inline-block")}
            src={updateImage ? updateImage : image}
          />
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            name="profileImg"
            id="profileImg"
            {...register("profileImg" /* { required: true } */)}
          />
        </label>
      </ProfileImgWrapper>
      <ProductFormWrapper>
        <label>사용자 이름</label>
        <input
          name="username"
          type="text"
          autoComplete="off"
          placeholder="2~10자 이내여야 합니다."
          {...register("username", {
            required: true,
            minLength: 2,
            maxLength: 10,
            onChange: e => {
              setValue("username", e.target.value);
            },
          })}
        />
        {errors.username?.type === "minLength" && (
          <p>*2~10자 이내여야 합니다.</p>
        )}
        {errors.username?.type === "maxLength" && (
          <p>*2~10자 이내여야 합니다.</p>
        )}
        <label> 계정 ID</label>
        <input
          name="accountname"
          type="text"
          autoComplete="off"
          placeholder="숫자만 입력 가능합니다."
          {...register("accountname", {
            required: true,
            pattern: /^[-._a-z0-9]+$/gi,
          })}
        />
        {errors.accountname?.type === "pattern" && (
          <p>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</p>
        )}
        {accountIdErrorMessage && <p>{accountIdErrorMessage}</p>}
        <label>소개</label>
        <input
          name="intro"
          type="text"
          autoComplete="off"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          {...register("intro", {
            required: true,
          })}
        />
        {errors.intro?.type === "pattern" && <p>* URL을 입력해 주세요.</p>}
      </ProductFormWrapper>
      <UploadBtn type="submit" disabled={!isValid}>
        저장
      </UploadBtn>
    </Form>
  );
};

export default ProfileUpdateForm;
