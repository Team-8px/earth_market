import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { updatePost, getPost } from "../../actions/postActions";
import { imageUploadsHandler } from "../../util/imageUploads";
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

  const [uploadPostImage, setUploadPostImage] = useState([]);

  const { postId } = useParams();

  const dispatch = useDispatch();

  const ref = useRef(null);

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const { content, postImages } = useSelector(state => state?.postRead);

  const userImage = useSelector(state => state?.postRead?.post?.author?.image);

  useEffect(() => {
    setUploadPostImage(
      postImages &&
        postImages.map(image => {
          return image;
        }),
    );
  }, [postImages]);

  useEffect(() => {
    if (content) {
      setValue("postText", content);
    }
  }, [content]);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

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

  const onChange = async e => {
    if (uploadPostImage.length <= MAX_UPLOAD - 1) {
      try {
        const nowSelectImage = e.target.files;
        const savedImage = await imageUploadsHandler(nowSelectImage[0]);
        setUploadPostImage([...uploadPostImage, savedImage]);
      } catch (e) {
        console.log(e);
      }
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

  const onRemoveImg = deleteImage => {
    setUploadPostImage(
      uploadPostImage.filter(image => {
        return image !== deleteImage;
      }),
    );
  };

  const onSubmit = async data => {
    try {
      const { postText } = data;
      const joinFilename = uploadPostImage && uploadPostImage.join();
      dispatch(updatePost(postText, joinFilename, postId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MainFieldSet>
        <ProfileImage
          onError={event => (event.target.style.display = "none")}
          onLoad={event => (event.target.style.display = "inline-block")}
          src={userImage}
        />
        <PostForm htmlFor="postText">
          <textarea
            type="text"
            name="postText"
            id="postText"
            placeholder={"게시글 입력하기..."}
            ref={ref}
            onInput={resizeHeight}
            maxLength="200"
            spellCheck="false"
            {...register("postText", {
              required: true,
              onChange: e => {
                setValue("postText", e.target.value);
              },
            })}
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
              {uploadPostImage &&
                uploadPostImage.map((image, i) => {
                  console.log(image, "이미지");
                  return (
                    <Item key={i}>
                      <PostImage
                        onError={event => (event.target.style.display = "none")}
                        onLoad={event =>
                          (event.target.style.display = "inline-block")
                        }
                        src={image}
                      />
                      <RemoveBtn
                        type="button"
                        onClick={() => {
                          return onRemoveImg(image);
                        }}
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
