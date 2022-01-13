import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listPosts } from "../actions/postActions";
import { API_URL } from "../constants/defaultUrl";

const MyProfileScreen = () => {
  const dispatch = useDispatch();

  const {
    productList: { products },
    postList: { posts },
    userLogin: { userInfo: user },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listPosts());
  }, [dispatch]);

  /* const { username, image, followingCount, followerCount, intro, accountname } =
    posts && posts[0].author; posts[0]*/
  //console.log(posts && posts[0].author);
  return (
    <div>
      {/* 유저 프로필 */}
      <h1>유저 프로필</h1>
      {/* <img src={image} alt="프로필 사진" /> */}
      {/* <ul>
        <li>{user && String(user.email)}</li>
        <li>{user && String(user.image)}</li>
        <li>{posts && String(posts[0])}</li>
        <li>{posts && String(posts[0].image)}</li>
        <li>{posts && String(posts[0].heartCount)}</li>
        <li>{posts && String(posts[0])}</li>
        <li>{posts && String(posts[0])}</li>
        <li>{posts && String(posts[0])}</li>
      </ul> */}

      {/* 상품목록 */}
      <h1>상품 목록</h1>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} style={{ display: "flex" }}>
              <div>
                <img src={`${API_URL}/${product.itemImage}`} alt="상품사진" />
              </div>
              <div>
                <ul>
                  <li>상품명: {product.itemName}</li>
                  <li>상품가격: {product.price}</li>
                  <li>상품링크: {product.link}</li>
                </ul>
              </div>
            </div>
          );
        })}
      <hr />

      {/* 게시글 목록 */}
      <h1>게시글 목록</h1>
      {posts &&
        posts.map((post) => {
          /* 여러개의 게시글 이미지를 여러 개의 문자열로 배열에 담아 나눔 */
          const postImages = post.image.split(",");

          return (
            <div key={post.id}>
              <div style={{ display: "flex" }}>
                {postImages.map((postImage, index) => {
                  return (
                    <img
                      key={index}
                      src={`${API_URL}/${postImage}`}
                      alt="상품사진"
                    />
                  );
                })}
              </div>
              <div>
                <ul>
                  <li>게시글: {post.content}</li>
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
};

/**
  * @products : 상품들 array
  [
    {
      id: "61db8a3c209fe0d5be04ad5b"
      itemImage: "1641777724819.jpg"
      itemName: "당근"
      link: "www.naver.com"
      price: 10,000,
      author : {}
    }, ....
  ]
  * @posts : 게시글들 array
  [
    {
      commentCount: 0
      comments: []
      content: "안녕하세요"
      createdAt: "2022-01-11T10:37:25.497Z"
      heartCount: 0
      hearted: false
      id: "61dd5de53fe886cd13383917"
      image: "1641897445443.jpg,1641897445466.jpg,1641897445471.jpg",
      author : {}
    }, ...
  ]
  
  * @postImages : 게시글 이미지들 array
  [
    '1641802294157.jpg', 
    '1641802294183.jpg', 
    '1641802294203.jpg'
  ]
*/

export default MyProfileScreen;
