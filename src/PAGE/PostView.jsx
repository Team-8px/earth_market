import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserMyProfile } from "../actions/userActions";
import { getPost } from "../actions/postActions";
import { getCommentList, deleteComment } from "../actions/commentAction";
//import Comment from "../../../components/Comment-gh";

const PostView = () => {
  const dispatch = useDispatch();
  // getPost API에 사용될 데이터
  const { postId } = useParams();
  // 댓글 생성시 useEffect에 적용하여, 재 렌더링 하기 위함
  const { craeteCommentId } = useSelector(state => state.commentCreate);

  // 댓글 삭제시 useEffect에 적용하여, 재 렌더링 하기 위함
  const { deleteCommentId } = useSelector(state => state.commentDelete);

  // 사용자 프로필을 리덕스 스토어에서 가져오기
  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
  );

  // 상세 게시글 스토어에서 가져오기
  const { content, updatedAt, heartCount, commentCount, postImages } =
    useSelector(state => state.postRead);

  // 댓글 리스트 배열을 스토어에서 가져오기
  const commentList = useSelector(state => state.commentList.comments);

  const onClickDeleteComment = commentId => {
    //댓글 삭제 API
    dispatch(deleteComment(postId, commentId));
  };

  useEffect(() => {
    //프로필 정보 얻어오기 API
    dispatch(getUserMyProfile());
  }, [dispatch]);

  useEffect(() => {
    //상세 게시글 불러오기 API
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    //댓글 리스트 가져오기 API
    dispatch(getCommentList(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

  return (
    <>
      <h1>PostView</h1>
      <h1>PostView</h1>
    </>
  );
};

export default PostView;
