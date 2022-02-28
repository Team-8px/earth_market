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
import { API_URL } from "../constants/defaultUrl";
import axios from "axios";

const ProfileUpdate = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const history = useHistory();

  const [updateImage, setUpdateImage] = useState([]);
  const [accountIdErrorMessage, setAccountIdErrorMessage] = useState("");
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);
  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
  );

  useEffect(() => {
    if (accountIdErrorMessage) {
      setAccountIdErrorMessage("");
    }
  }, [getValues().accountname]);

  useEffect(() => {
    // 나의 프로필 가져오기 API
    dispatch(getUserMyProfile());
  }, [dispatch]);

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setUpdateImage(nowImageUrl);

    setIsUpdatedImage(true);
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
      {/* 헤더필드 영역 */}
      <HeaderFieldSet>
        <HeaderContainer>
          <HeaderLinkImg onClick={() => history.goBack()} src={PrevBtn} />
          <Button
            type="submit"
            width="90px"
            size="ms"
            color="#fff"
            isValid={isValid}
          >
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
              autoComplete="off"
              {...register("username", {
                minLength: 2,
                maxLength: 10,
              })}
            />
            {errors.username?.type === "minLength" && (
              <p>*2~10자 이내여야 합니다.</p>
            )}
          </label>
          <label>
            계정 ID
            <input
              name="accountname"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
              autoComplete="off"
              {...register("accountname", {
                pattern: /^[-._a-z0-9]+$/gi,
              })}
            />
            {errors.accountname?.type === "pattern" && (
              <p>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</p>
            )}
            {accountIdErrorMessage && <p>{accountIdErrorMessage}</p>}
          </label>
          <label>
            소개
            <input
              name="intro"
              type="text"
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              autoComplete="off"
              {...register("intro", {})}
            />
          </label>
        </ProfileFormWrapper>
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
  border-bottom: 0.5px solid ${props => props.theme.palette["border"]};
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
    border: 1px solid ${props => props.theme.palette["border"]};
    border-radius: 50%;
    cursor: pointer;

    &::after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      width: 36px;
      height: 36px;
      background: ${props => props.theme.palette["lightGray"]} url(${Upload})
        no-repeat center / 36px 36px;
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
    color: ${props => props.theme.palette["main"]};
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette["border"]};
    margin-top: 10px;
    caret-color: ${props => props.theme.palette["main"]};

    &:focus {
      border-bottom: 1px solid ${props => props.theme.palette["main"]};
    }
    &::placeholder {
      color: ${props => props.theme.palette["border"]};
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

export default ProfileUpdate;
