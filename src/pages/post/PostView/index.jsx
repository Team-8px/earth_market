import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../../actions/userActions";
// 스타일 컴포넌트
import { MainLayOut } from "../PostUpload/index.style";

const PostView = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productList, shallowEqual);
  const { posts } = useSelector(state => state.postList, shallowEqual);
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userProfile, shallowEqualP);

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listPosts());
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <MainLayOut>
      <h1>Post view</h1>
    </MainLayOut>
  );
};

export default PostView;
