import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 스타일로직
import { Button } from "../components/module/button/button";
import uploadIcon from "../asset/upload-file.png";
import PrevBtn from "../asset/icon-arrow-left.svg";
// import { UploadPost, UploadImg } from "../components/module/upload/UploadPost";
// import testPostImg from "../asset/post-img-example.png";
// import testIcon from "../asset/upload-file.png";
// import xIcon from "../asset/icon/icon-delete.svg";

// 비즈니스 로직
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
// import { createPost } from "../actions/postActions";
import { multipleImageUploadsHandler } from "../util/multipleImageUploads";
import { getUserMyProfile } from "../actions/userActions";

const PostUpload = () => {
  // 이미지 업로드 갯수 제한
  const MAX_UPLOAD = 3;

  const [myImage, setMyImage] = useState([]);

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { image } = useSelector(state => state.userReadProfile);

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
    const { postText } = data;
    const fileDatas = myImage;
    //console.log(fileDatas);
    const image = await multipleImageUploadsHandler(fileDatas);
    console.log(data, "입력데이터");
    // dispatch(createPost(postText, image));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* 헤더필드 영역 */}
      <HeaderFieldSet>
        <HeaderContainer>
          <HeaderLinkImg src={PrevBtn} />
          <Button width="90px" size="ms" color="#fff">
            저장
          </Button>
        </HeaderContainer>
      </HeaderFieldSet>
      {/* 메인필드 영역 */}
      <MainFieldSet>
        <ProfileImage src={image} />
        <TextBox
          name="postText"
          placeholder={"입력해주세요"}
          {...register("postText")}
        />
        <UploadImgIcon htmlFor="imgUpload" />
        <label onChange={onChange} htmlFor="profileImg">
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            name="profileImg"
            id="profileImg"
            {...register("profileImg")}
          ></input>
        </label>
        <PostPhotoList></PostPhotoList>
        <PhotoList>
          {myImage &&
            myImage.map((x, i) => {
              return (
                <Item key={i}>
                  <PostImage src={x.previewImg} />
                </Item>
              );
            })}
        </PhotoList>
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
  border-bottom: 0.5px solid #dbdbdb;
`;

const HeaderLinkImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  border: 0.5px solid #dbdbdb;
`;

// PostForm

// const PostUploadContainer = styled.article`
//   position: relative;
//   min-width: 300px;
//   width: 100%;
//   padding-right: 16px;
//   overflow-y: scroll;
// `;

// const PostFormContainer = styled.form`
//   width: 100%;
//   padding-top: 12px;

//   input {
//     position: absolute;
//     left: -10000px;
//     top: auto;
//     width: 1px;
//     height: 1px;
//     overflow: hidden;
//     padding: 0;
//   }
// `;

const TextBox = styled.textarea`
  width: 100%;
  height: 36px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
// 글자 칸 수 넘어갈 때마다 height값 증가하는 이벤트 잘 모르겠음

const UploadImgIcon = styled.label`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  background-image: url(${uploadIcon});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  z-index: 100;
`;

// PostImg

const PostPhotoList = styled.section``;
const PhotoList = styled.ul`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// const XButton = styled.button`
//   position: absolute;
//   top: 6px;
//   right: 6px;
//   height: 22px;
//   width: 22px;
//   background-image: url(${xIcon});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

const Item = styled.li`
  position: relative;
  border-radius: 10px;
  min-width: 304px; // 줄어들어도 박스크기에 영향이 가지 않게. min설정
  height: 228px;
  overflow: hidden;
  border: 0.5px solid #dbdbdb;
`;

export default PostUpload;
