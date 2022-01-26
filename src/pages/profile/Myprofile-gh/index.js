import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts, deleteProduct } from "../../../actions/productActions";
import { listPosts, deletePost } from "../../../actions/postActions";
import { getUserMyProfile } from "../../../actions/userActions";
import UseGNBHook from "../../../hooks/useGNB";

const MyProfile = () => {
  //const [isDeleteProduct, setIsDeleteProduct] = useState(false);

  const dispatch = useDispatch();

  const { products } = useSelector(state => state.productList, shallowEqual);
  const { posts } = useSelector(state => state.postList, shallowEqual);
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userReadProfile);

  const onclickDeletePost = postId => {
    dispatch(deletePost(postId));
  };

  const onclickDeleteProduct = productId => {
    //setIsDeleteProduct(true);
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserMyProfile());
  }, [dispatch]);

  return (
    <>
      {/* 유저 프로필 */}
      <h1>유저 프로필</h1>
      {/* 프로필 사진 */}
      <img
        style={{ height: "100px", width: "100px" }}
        src={image}
        alt="프로필 사진"
      />
      <ul>
        <br />
        <li>
          <Link to={`/gh/profile/my/update`}>프로필수정 링크</Link>
        </li>
        <br />
        <li>
          <Link to={`/gh/product/upload`}>상품등록 링크</Link>
        </li>
        <br />
        <li>
          <Link to={`/gh/post/my/upload`}>게시물 등록 링크</Link>
        </li>
      </ul>
      {/* <img src={image} alt="프로필 사진" /> */}
      <br />
      <br />
      <br />

      <div>
        <ul>
          <li>사용자이름 : {username}</li>
          <li>계정 : {accountname}</li>
          <li>소개글 : {intro}</li>
          <li>팔로우 : {followerCount}</li>
          <li>팔로잉 : {followingCount}</li>
        </ul>
      </div>

      <br />
      <br />
      <br />

      {/* 상품목록 */}
      <h1>상품 목록</h1>
      {products &&
        products.map(product => {
          return (
            <div key={product.id} style={{ display: "flex" }}>
              <div style={{ height: "100px", width: "100px" }}>
                <img src={product.itemImage} alt="상품사진" />
              </div>
              <div>
                <br />
                <br />
                <br />
                <ul>
                  <li>상품명: {product.itemName}</li>
                  <li>상품가격: {product.price}</li>
                  <li>상품링크: {product.link}</li>
                  <br />
                  <br />
                  <li>
                    <Link to={`/gh/product/update/${product.id}`}>
                      상품수정 클릭 모달창
                    </Link>
                  </li>
                  <br />
                  <br />
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      onclickDeleteProduct(product.id);
                    }}
                  >
                    상품삭제 클릭 모달창
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      <hr />

      {/* 게시글 목록 */}
      <h1>게시글 목록</h1>
      {posts &&
        posts.map(post => {
          /* 여러개의 게시글 이미지를 여러 개의 문자열로 배열에 담아 나눔 */
          const postImages = post.image.split(",");

          return (
            <div key={post.id}>
              <div style={{ display: "flex" }}>
                {postImages.map((postImage, index) => {
                  return (
                    <img
                      style={{ height: "100px", width: "100px" }}
                      key={index}
                      src={postImage}
                      alt="게시글 사진"
                    />
                  );
                })}
              </div>
              <div>
                <ul>
                  <li>{post.content}</li>
                  <br />
                  <br />
                  <li>
                    <Link to={`/gh/post/${post.id}`}>게시글 링크</Link>
                  </li>
                  <br />
                  <br />
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => onclickDeletePost(post.id)}
                  >
                    게시글 삭제 모달창
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      <UseGNBHook />
    </>
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
