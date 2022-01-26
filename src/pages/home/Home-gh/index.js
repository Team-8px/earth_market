import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFollowerPostList } from "../../../actions/followAction";
import UseGNBHook from "../../../hooks/useGNB";

const Home = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector(state => state.followerPostList);

  console.log(posts);

  useEffect(() => {
    dispatch(getFollowerPostList());
  }, [dispatch]);

  return (
    <div>
      <h1>감귤마켓 피드</h1>
      <br />
      <h1>
        <Link to={`/gh/search`}>검색 링크</Link>
      </h1>
      <br />
      <br />
      <br />
      <div>
        {posts &&
          posts.map((post, index) => {
            return (
              <ul key={index}>
                <h3>게시글 내용</h3>
                <li>{post.content}</li>
                <li>좋아요: {post.heartCount}</li>
                <li>댓글숫자: {post.commentCount}</li>
                <li>
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={post.image}
                  />
                </li>
                <li>
                  <Link to={`/gh/post/${post.id}`}>게시글 상세페이지 링크</Link>
                </li>
                <br />
                <br />
                <br />
                <h3>프로필 내용</h3>
                <li>{post?.author?.image}</li>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={post?.author?.image}
                />
                <li>{post?.author?.username}</li>
                <li>{post?.author?.accountname}</li>
                <br />
                <br />
                <br />
                <br />
              </ul>
            );
          })}
      </div>
      <UseGNBHook />
    </div>
  );
};

export default Home;
