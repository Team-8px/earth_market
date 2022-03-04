// PostUpload 컴포넌트입니다.
import React from "react";
import styled from "styled-components";
import Upload from "../../../asset/upload-file.png";
import EllipseImg from "../../../asset/basic-profile-img-small.svg";

const UploadContainer = styled.main`
  display: flex;
  padding: 20px 0 20px 16px;

  h2 {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 12px;
    border: 0.5px solid #dbdbdb;
  }
`;

const UploadWrapper = styled.article`
  position: relative;
  min-width: 300px;
  width: 100%;
  padding-right: 16px;
  overflow-y: scroll;
`;

const UploadPostWrapper = styled.div`
  width: 100%;
  padding-top: 12px;

  textarea {
    width: 100%;
    height: 18px;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 18px;
  }

  label {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 50px;
    height: 50px;
    background-image: url(${Upload});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    z-index: 100;
  }

  input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

function Upload({}) {
  return (
    <UploadContainer>
      <h2>게시글 작성</h2>
      <img src={EllipseImg} alt="프로필 사진" />
      <UploadWrapper>
        <UploadPostWrapper></UploadPostWrapper>
      </UploadWrapper>
    </UploadContainer>
  );
}

export default Upload;
