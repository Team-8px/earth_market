import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createPost } from "../../actions/postActions";
import { multipleImageUploadsHandler } from "../../util/multipleImageUploads";
import { getUserProfile } from "../../actions/userActions";
import basicImg from "../../asset/basic-profile-img.svg";
import {
  Form,
  PostFieldSet,
  ProfileImage,
  PostForm,
  PostFormContainer,
  UploadImgIcon,
  PhotoList,
  PostImage,
  RemoveBtn,
  Item,
  UploadBtn,
  UploadImgInput,
} from "./index.style";

const PostUploadForm = () => {
  const MAX_UPLOAD = 3;

  const [myImage, setMyImage] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const ref = useRef(null);

  const { image } = useSelector(state => state?.userReadProfile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

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

  const resizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "10vh";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  const trigger = e => {
    e.target.src = basicImg;
  };

  const onRemoveImg = deleteImage => {
    setMyImage(
      myImage.filter(image => {
        return image.previewImg !== deleteImage;
      }),
    );
    URL.revokeObjectURL(deleteImage);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="textHidden">게시글 작성 페이지</h3>
      <PostFieldSet>
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
          <h4 className="textHidden">게시글 작성하기</h4>
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
          <PostFormContainer>
            <h4 className="textHidden">게시글 이미지 업로드</h4>
            <UploadImgIcon onChange={onChange} htmlFor="profileImg">
              <UploadImgInput
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
                        onClick={() => {
                          return onRemoveImg(image.previewImg);
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
      </PostFieldSet>
    </Form>
  );
};

export default PostUploadForm;
