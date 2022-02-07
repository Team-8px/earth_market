import React from "react";
import styled from "styled-components";

import xIcon from "../../../asset/icon/icon-delete.svg";
import uploadIcon from "../../../asset/upload-file.png";

const PrifileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  border: 0.5px solid #dbdbdb;
`;
// PostForm

const PostUploadContainer = styled.article`
  position: relative;
  min-width: 300px;
  width: 100%;
  padding-right: 16px;
  overflow-y: scroll;
`;

const PostFormContainer = styled.form`
  width: 100%;
  padding-top: 12px;

  input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
  }
`;

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

const Button = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  height: 22px;
  width: 22px;
  background-image: url(${xIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Item = styled.li`
  position: relative;
  border-radius: 10px;
  min-width: 304px; // 줄어들어도 박스크기에 영향이 가지 않게. min설정
  height: 228px;
  overflow: hidden;
  border: 0.5px solid #dbdbdb;
`;

export function UploadImg({ img }) {
  return (
    <Item>
      <PostImage src={img} />
      <Button />
    </Item>
  );
}

export function UploadPost({ children, img, contentText }) {
  const value = "게시글 입력하기...";

  return (
    <>
      <PrifileImage src={img}></PrifileImage>
      <PostUploadContainer>
        <PostFormContainer autocomplete="off">
          <TextBox name="text" placeholder={value}>
            {contentText}
          </TextBox>
          <UploadImgIcon htmlFor="imgUpload" />
          <input type="file" accept="image/*" id="imgUpload" />
        </PostFormContainer>
        <PostPhotoList>
          <PhotoList>{children}</PhotoList>
        </PostPhotoList>
      </PostUploadContainer>
    </>
  );
}
