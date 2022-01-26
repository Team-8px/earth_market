import React, { useState } from "react";
// 스타일 컴포넌트
import UploadPost from "../../../components/UploadPost";
import {
  MainLayOut,
  UploadContainer,
  UploadWrapper,
  UploadPostWrapper,
} from "./index.style";
import { HeaderButton } from "../../../components/Header";
// 스타일 컴포넌트

const PostUpload = () => {
  return (
    <>
      <HeaderButton />
      <MainLayOut>
        <UploadPost>UploadPost</UploadPost>
        {
          /* <UploadContainer>
          <UploadWrapper>
            <UploadPostWrapper></UploadPostWrapper>
          </UploadWrapper>
        </UploadContainer> */
          // 지수님과 작업이 겹친 부분
        }
      </MainLayOut>
    </>
  );
};

export default PostUpload;
