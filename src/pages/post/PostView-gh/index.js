import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserMyProfile } from "../../../actions/userActions";
import { getPost } from "../../../actions/postActions";
import { getCommentList } from "../../../actions/commentAction";
import { API_URL } from "../../../constants/defaultUrl";
import Comment from "../../../components/Comment-gh";
// 댓글 생성 부분 컴포넌트만 다시 불러와서 적용할 예정입니다.

const PostView = () => {
  const [comment, setComment] = useState();

  const { postId } = useParams();

  const { image, username, accountname } = useSelector(
    state => state.userProfile,
    shallowEqual,
  );

  const { content, updatedAt, heartCount, commentCount, postImages } =
    useSelector(state => state.postRead, shallowEqual);

  const commentList = useSelector(
    state => state.commentList.comments,
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMyProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    dispatch(getCommentList(postId));
  }, [dispatch, postId, comment]);

  const getComment = data => {
    setComment(data);
  };

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
                    src={`${API_URL}/${postImage}`}
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
        <h1>댓글 리스트</h1>
        {commentList &&
          commentList.map((comment, index) => {
            return (
              <ul key={comment.id}>
                <li>댓글내용: {comment.content}</li>
                <li>작성자: {comment.id}</li>
              </ul>
            );
          })}
      </div>
      {/* 댓글생성 */}
      <Comment getComment={getComment} postId={postId} />
    </>
  );
};

export default PostView;
