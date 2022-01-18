import React from "react";
import Post from "../../../components/Post";
import { MainLayOut } from "./index.style";
const YourProfile = () => {
  return (
    <MainLayOut>
      <Post
        authorId="테스트입니다"
        authorName="this is test"
        content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
        date="2022년 1월 18일"
        likeCount="999"
        commentCount="999"
      />
    </MainLayOut>
  );
};

export default YourProfile;
