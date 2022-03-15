import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { multipleImageUploadsHandler } from "../../util/imageUploads";
import {
  Form,
  MainFieldSet,
  ProfileImage,
  PostForm,
  PostFormContainer,
  UploadImgIcon,
  PhotoList,
  PostImage,
  RemoveBtn,
  Item,
  UploadBtn,
} from "./index.style";

const PostUpdateForm = () => {
  const MAX_UPLOAD = 3;

  const [myImage, setMyImage] = useState([]);

  const [updateImage, setUpdateImage] = useState();

  const { productId } = useParams();

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

  const { image, itemName, price, link } = useSelector(
    state => state?.productRead,
  );

  useEffect(() => {
    if (itemName) {
      setValue("itemName", itemName);
    }
  }, [itemName]);

  useEffect(() => {
    if (price) {
      setValue("price", price);
    }
  }, [price]);

  useEffect(() => {
    if (link) {
      setValue("link", link);
    }
  }, [link]);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "10vh";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "10vh";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  const onChange = e => {
    if (myImage.length <= MAX_UPLOAD - 1) {
      const nowSelectImageList = e.target.files;

      const nowImgURLList = [...myImage];

      const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);

      nowImgURLList.push({
        previewImg: nowImageUrl,
        fileData: nowSelectImageList[0],
      });

      setMyImage(nowImgURLList);
    } else {
      alert("사진 3개까지만 업로드 가능");
    }
  };

  const resizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "10vh";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  const ref = useRef(null);

  const onSubmit = async data => {
    try {
      const { postText } = data;
      const fileDatas = myImage;
      const image = await multipleImageUploadsHandler(fileDatas);
      dispatch(createPost(postText, image));
    } catch (e) {
      console.err(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MainFieldSet>
        <ProfileImage
          onError={e => {
            trigger(e);
          }}
          src={image}
        />
        <PostForm
          {...register("postText", { required: true })}
          htmlFor="postText"
        >
          <textarea
            type="text"
            name="postText"
            id="postText"
            placeholder={"게시글 입력하기..."}
            ref={ref}
            onInput={resizeHeight}
            maxLength="200"
            spellCheck="false"
          />
          <PostFormContainer htmlFor="imgUpload">
            <UploadImgIcon onChange={onChange} htmlFor="profileImg">
              <input
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                name="profileImg"
                id="profileImg"
                {...register("profileImg")}
              />
            </UploadImgIcon>
            <PhotoList>
              {myImage &&
                myImage.map((image, i) => {
                  return (
                    <Item key={i}>
                      <PostImage src={image.previewImg} />
                      <RemoveBtn
                        type="button"
                        onClick={i => onRemoveImg(image.url)}
                      >
                        <span className="ir">이미지 삭제하기</span>
                      </RemoveBtn>
                    </Item>
                  );
                })}
            </PhotoList>
          </PostFormContainer>
          <UploadBtn type="submit" disabled={!isValid}>
            업로드
          </UploadBtn>
        </PostForm>
      </MainFieldSet>
    </Form>
  );
};

export default PostUpdateForm;
