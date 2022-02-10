import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../actions/productActions";
import { imageUploadsHandler } from "../util/imageUploads";

const PostUpload = () => {
  const [productImage, setProductImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const previewImage = e => {
    const nowSelectImageList = e.target.files;

    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

    setProductImage(nowImageUrl);
  };

  const onSubmit = async data => {
    const { itemName, price, link, itemImage } = data;

    const image = await imageUploadsHandler(itemImage[0]);

    dispatch(createProduct(itemName, Number(price), link, image));
  };

  return (
    <>
      <h1>PostUpload</h1>
      <h1>PostUpload</h1>
      <h1>PostUpload</h1>
    </>
  );
};

export default PostUpload;
