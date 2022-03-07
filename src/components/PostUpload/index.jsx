import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createPost } from "../../actions/postActions";
import { multipleImageUploadsHandler } from "../../util/multipleImageUploads";
import { getUserMyProfile } from "../../actions/userActions";
import basicImg from "../../asset/basic-profile-img.svg";
import {
  Form,
  MainFieldSet,
  ProfileImage,
  PostForm,
  PostFormContainer,
  TextBox,
  UploadImgIcon,
  PostPhotoList,
  PhotoList,
  PostImage,
  RemoveBtn,
  Item,
  UploadBtn,
} from "./index.style";

const PostUploadForm = () => {
  // 이미지 업로드 갯수 제한
  const MAX_UPLOAD = 3;

  const [myImage, setMyImage] = useState([]);

  //const [isButtonStatus, setIsButtonStatus] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const { image } = useSelector(state => state?.userReadProfile);

  useEffect(() => {
    //나의 프로필 정보 얻기
    dispatch(getUserMyProfile());
  }, [dispatch]);

  const onChange = e => {
    if (myImage.length <= MAX_UPLOAD - 1) {
      const nowSelectImageList = e.target.files; //최종1건만, 한번에 받은 파일리스트 (obj임)

      const nowImgURLList = [...myImage]; // 현재 myImage를 복사하고 깊은 복사? 얕은복사?

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

  // 글자 칸 수 넘어갈 때마다 height값 증가하는 이벤트
  const resizeHeight = useCallback(() => {
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

  const ref = useRef(null);

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "10vh";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, []);

  const trigger = e => {
    e.target.src = basicImg;
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
        <PostForm>
          <TextBox
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
          </TextBox>
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
            <PostPhotoList></PostPhotoList>
            <PhotoList>
              {myImage &&
                myImage.map((image, i) => {
                  return (
                    <Item key={i}>
                      <PostImage src={image.previewImg} />
                      <RemoveBtn>
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

export default PostUploadForm;
