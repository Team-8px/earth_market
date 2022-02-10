import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { updateUserProfile, getUserMyProfile } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";

const ProfileUpdate = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  // updateImage 업데이트한 사진, 이미지 변경 여부를 따지고, 미리보기 사진을 변경
  const [updateImage, setUpdateImage] = useState([]);
  /* 
  이미지 업데이트 여부 isUpdatedImage 활용예시
  <img src={isUpdatedImage ? updateImage : image} />"
  */
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);

  //나의 프로필을 리덕스 스토어에서 가져오기
  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
  );

  useEffect(() => {
    // 나의 프로필 가져오기 API
    dispatch(getUserMyProfile());
  }, [dispatch]);

  // 이미지 미리 보기
  //<label onChange={previewImage} htmlFor="itemImg"><Input /></label>
  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setUpdateImage(nowImageUrl);

    setIsUpdatedImage(true);
  };

  const onSubmit = async data => {
    const { profileImg, username, accountname } = data;

    const image = await imageUploadsHandler(profileImg[0]);

    console.log(image, username, accountname);
    // 나의 프로필 수정하기 API
    dispatch(updateUserProfile(image, username, accountname));
  };

  return (
    <>
      <h1>ProfileUpdate</h1>
      <h1>ProfileUpdate</h1>
      <h1>ProfileUpdate</h1>
    </>
  );
};

export default ProfileUpdate;
