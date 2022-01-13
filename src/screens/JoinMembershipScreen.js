import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { joinMembership } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";

/* 나중에 유효성 검사할때 사용해보자!! 

  const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm(); */

const JoinMembershipScreen = () => {
  const [myImage, setMyImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const previewImage = (e) => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setMyImage(nowImageUrl);
  };

  const onSubmit = async (data) => {
    const { email, password, username, accountname, profileImg } = data;

    const image = await imageUploadsHandler(profileImg[0]);

    dispatch(joinMembership(email, password, username, accountname, image));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <br />

      <div>
        <label onChange={previewImage} htmlFor="input-file">
          <img src={IMG_URL} alt="프로필 사진" />
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

      <br />
      <br />
      <br />

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
      <div>
        <input
          name="username"
          type="text"
          placeholder="사용자 이름"
          {...register("username")}
        />
      </div>
      <div>
        <input
          name="accountname"
          type="text"
          placeholder="계정ID"
          {...register("accountname")}
        />
      </div>

      <div>
        <button>회원가입</button>
      </div>
    </form>
  );
};

//테스트 더미 데이터
const IMG_URL =
  "https://appvital.com/images/profile/file-uploader-api-profile-avatar-2.jpg";

export default JoinMembershipScreen;
