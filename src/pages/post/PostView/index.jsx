import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../../actions/userActions";

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
    <div>
      <h1>Post view</h1>
    </div>
  );
};

export default PostView;
