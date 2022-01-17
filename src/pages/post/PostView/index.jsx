import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../../actions/userActions";

const PostView = () => {
  //const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div>
      <h1>Post view</h1>
    </div>
  );
};

export default PostView;
