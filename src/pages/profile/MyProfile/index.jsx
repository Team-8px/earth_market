import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { listProducts } from "../../../actions/productActions";
import { listPosts } from "../../../actions/postActions";
import { getUserProfile } from "../../../actions/userActions";
import { API_URL } from "../../../constants/defaultUrl";

const MyProfile = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productList, shallowEqual);
  const { posts } = useSelector((state) => state.postList, shallowEqual);
  const { image, username, accountname, intro, followerCount, followingCount } = useSelector(
    (state) => state.userProfile,
    shallowEqual
  );

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listPosts());
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div>
      {/* 유저 프로필 */}
      <h1>유저 프로필</h1>
      <img src={image} alt="프로필 사진" />
      <ul>
        <li>{username}</li>
        <li>{accountname}</li>
        <li>{intro}</li>
        <li>{followerCount}</li>
        <li>{followingCount}</li>
      </ul>

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
                  return <img key={index} src={`${API_URL}/${postImage}`} alt="상품사진" />;
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

export default MyProfile;
