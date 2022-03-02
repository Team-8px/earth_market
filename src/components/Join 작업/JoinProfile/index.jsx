import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../../../constants/defaultUrl";
import { joinMembership } from "../../../actions/userActions";
import { imageUploadsHandler } from "../../../util/imageUploads";
//스타일
import { Form, MainFieldSet, InputWrapper, ProfileImgWrapper, Title, SubText, JoinButton } from "./index.style";

export default function JoinProfile({ userInfo }) {
  const [isPreviewImage, setIsPreviewImage] = useState(true);
  const [myImage, setMyImage] = useState('');
  const token = localStorage.getItem('token');
  const history = useHistory();
  const [accountIdErrorMessage, setAccountIdErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const uploadImage = async (e) => {
    const imgData = new FormData();
    imgData.append('image',e.target.files[0]);
    const uploadedImg = await (
      await axios.post(`${API_URL}/image/uploadfile`, imgData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
    ).data;

    const imgName = uploadedImg.filename;
    setMyImage(`${API_URL}/${imgName}`);
  };

  const onSubmit = async (data) => {
    const response = await axios.post(`${API_URL}/user/accountnamevalid`,{
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        user: {
          accountname: data.account,
        },
      }),
    });
    if (response.data.message === "이미 가입된 계정ID 입니다.") {
      setAccountIdErrorMessage(response.data.message);
    } else {
      const joinResponse = await axios.post(`${API_URL}/user/accountnamevalid`,{
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          user: {
            username: data.username,
            email: userInfo.email,
            password: userInfo.password,
            accountname: data.accountname,
            intro: data.intro,
            image: myImage,
          },
        }),
      });
      if (joinResponse.data.message === "회원가입 성공") {
        history.push("/join/email");
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <MainFieldSet>
          <Title>
            프로필 설정
            <SubText>나중에 언제든지 변경할 수 있습니다.</SubText>
          </Title>
          <ProfileImgWrapper isPreviewImage={isPreviewImage} myImage={myImage}>
            <label onChange={uploadImage} htmlFor="profileImg">
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
                {...register("intro")}
              />
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