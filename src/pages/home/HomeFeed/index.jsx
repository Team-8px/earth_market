import React from "react";
//스타일 컴포넌트
import { MainLayOut } from "./index.style";
import Post from "../../../components/Post";

const HomeFeed = () => {
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
      <Post
        authorId="테스트입니다"
        authorName="this is test"
        content="Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content테스트 Content"
        date="2022년 1월 18일"
        likeCount="999"
        commentCount="999"
      />
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

export default HomeFeed;
