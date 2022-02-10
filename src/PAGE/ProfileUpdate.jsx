import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { updateUserProfile, getUserMyProfile } from "../actions/userActions";
import { imageUploadsHandler } from "../util/imageUploads";

const ProfileUpdate = () => {
  const [updateImage, setUpdateImage] = useState([]);
  const [isUpdatedImage, setIsUpdatedImage] = useState(false);
  const { register, handleSubmit } = useForm();

  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
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

    console.log(image, username, accountname);

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
