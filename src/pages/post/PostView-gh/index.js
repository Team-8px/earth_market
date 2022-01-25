import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserMyProfile } from "../../../actions/userActions";
import { getPost } from "../../../actions/postActions";
import { getCommentList, deleteComment } from "../../../actions/commentAction";
import Comment from "../../../components/Comment-gh";
// 댓글 생성 부분 컴포넌트만 다시 불러와서 적용할 예정입니다.

const PostView = () => {
  //const [comment, setComment] = useState();

  const dispatch = useDispatch();

  const { postId } = useParams();

  const { craeteCommentId } = useSelector(state => state.commentCreate);

  const { deleteCommentId } = useSelector(state => state.commentDelete);

  const { image, username, accountname } = useSelector(
    state => state.userReadProfile,
    shallowEqual,
  );

  const { content, updatedAt, heartCount, commentCount, postImages } =
    useSelector(state => state.postRead, shallowEqual);

  const commentList = useSelector(
    state => state.commentList.comments,
    shallowEqual,
  );

  const onclickDeleteComment = commentId => {
    dispatch(deleteComment(postId, commentId));
  };

  /* const getComment = data => {
    setComment(data);
  }; */

  useEffect(() => {
    dispatch(getUserMyProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    dispatch(getCommentList(postId));
  }, [dispatch, postId, craeteCommentId, deleteCommentId]);

  return (
    <>
      {/* 나의 프로필 정보 */}
      <div>
        <h1>프로필정보</h1>
        <ul>
          <li>
            <Link to={`/gh/profile/my`}>돌아가기 링크</Link>
          </li>
          <br />
          <li style={{ height: "100px", width: "100px" }}>
            <img src={image} alt="프로필 사진" />
          </li>
          <li>{username}</li>
          <li>{accountname}</li>
        </ul>
      </div>
      {/* 나의 상세 게시글 정보 */}
      <div>
        <h1>게시글 정보</h1>
        <ul>
          <li>content: {content}</li>
          <li>
            {postImages &&
              postImages.map((postImage, index) => {
                return (
                  <img
                    style={{ height: "100px", width: "100px" }}
                    key={index}
                    src={postImage}
                    alt="게시글 사진"
                  />
                );
              })}
          </li>
          <li>updatedAt: {updatedAt}</li>
          <li>heartCount: {heartCount}</li>
          <li>commentCount: {commentCount}</li>
        </ul>
      </div>
      {/* 댓글리스트 */}
      <div>
        <br />
        <br />
        <h1>댓글 리스트</h1>
        <br />
        <br />
        {commentList &&
          commentList.map(comment => {
            return (
              <ul key={comment.id}>
                <li>댓글내용: {comment.content}</li>
                <li>작성자: {comment.id}</li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onclickDeleteComment(comment.id);
                  }}
                >
                  댓글 삭제 클릭 모달창
                </li>
                <br />
                <br />
              </ul>
            );
          })}
      </div>
      <br />
      <br />
      {/* 댓글생성 */}
      <Comment postId={postId} />
    </>
  );
};

export default PostView;
