import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  updateUserProfile,
  getUserMyProfile,
} from "../../../actions/userActions";
import { imageUploadsHandler } from "../../../util/imageUploads";

// 유효성검사 로직
//   const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm();

const ProfileModification = () => {
  const [updateImage, setUpdateImage] = useState([]);
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);
  const { register, handleSubmit } = useForm();

  const { image, username, accountname } = useSelector(
    state => state.userProfile,
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMyProfile());
  }, [dispatch]);

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setUpdateImage(nowImageUrl);

    setIsUpdatedImage(true);
  };

  const onSubmit = async data => {
    const { profileImg, username, accountname } = data;

    const image = await imageUploadsHandler(profileImg[0]);

    dispatch(updateUserProfile(image, username, accountname));
  };

  return (
    <>
      {/* 프로필 사진 미리보기 */}

      <img
        style={{ height: "100px", width: "100px" }}
        src={isUpdatedImage ? updateImage : image}
        alt="프로필 사진"
      />

      <h1>{isUpdatedImage ? updateImage : image}</h1>

      {/* 사용자 프로필 폼*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 사용자 프로필 파일 업로드*/}
        <div>
          <label onChange={previewImage} htmlFor="profileImg">
            <input
              id="profileImg"
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profileImg"
              {...register("profileImg")}
            ></input>
          </label>
        </div>

        {/* 사용자 이름 */}
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            {...register("username")}
          />
        </div>

        {/* 계정 id */}
        <div>
          <input
            name="accountname"
            type="text"
            placeholder="accountname"
            {...register("accountname")}
          />
        </div>

        {/* 소개 */}
        {/* 백엔드api명세에는 intro가 있지만 실질적인 응답데이터에는 intro가 없다 */}
        {/* <div>
          <input
            name="accountname"
            type="text"
            placeholder="intro"
            {...register("intro")}
          />
        </div> */}
        <button>update</button>
      </form>
    </>
  );
};

export default ProfileModification;
