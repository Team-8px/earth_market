import React from "react";
import { useParams } from "react-router-dom";
import PostViewContainer from "../components/postview/PostViewContainer";
import CommonHeader from "../components/common/CommonHeader";

const PostView = () => {
  const { postId } = useParams();

  return (
    <>
      <CommonHeader />
      <PostViewContainer postId={postId} />
    </>
  );
};

export default PostView;
