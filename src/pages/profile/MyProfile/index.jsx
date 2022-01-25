import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../../actions/productActions";
import { listPosts } from "../../../actions/postActions";
import { getUserMyProfile } from "../../../actions/userActions";
import { API_URL } from "../../../constants/defaultUrl";
// 스타일 컴포넌트
import {
  MainLayOut,
  ProductContainer,
  ProductWrapper,
  UserPostContainer,
  UserPostWrapper,
} from "./index.style";
import DisplayHandler from "../../../components/DisplayHandler";
import { Alert, AlertButton } from "../../../components/Alert";
import { HiddenMenu, HiddenButton } from "../../../components/HiddenMenu";
import { HeaderBasic } from "../../../components/Header";
import UserInfo from "../../../components/UserInfo";
const MyProfile = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(state => state.productList, shallowEqual);
  const { posts } = useSelector(state => state.postList, shallowEqual);
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userProfile, shallowEqual);

  // 게시글 메뉴
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  // 네비게이션 메뉴
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listPosts());
    dispatch(getUserMyProfile());
  }, [dispatch]);

  return (
    <>
      <MainLayOut>
        {/* 유저 프로필 */}
        {/* header */}
        <HeaderBasic />
        <UserInfo></UserInfo>
        {/* 상품목록 */}
        <ProductContainer>
          <ProductWrapper>
            <h1>상품 목록</h1>
            {products &&
              products.map((product, index) => {
                return (
                  <div key={index} style={{ display: "flex" }}>
                    <div>
                      <img
                        src={`${API_URL}/${product.itemImage}`}
                        alt="상품사진"
                      />
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
          </ProductWrapper>
        </ProductContainer>
        {/* 게시글 목록 */}
        <UserPostContainer>
          <UserPostWrapper>
            <DisplayHandler></DisplayHandler>
          </UserPostWrapper>
        </UserPostContainer>
      </MainLayOut>
      {/* 게시글 모달 */}
      <HiddenMenu visible={postDialog}>
        <li>
          <HiddenButton
            type="button"
            isAlert={isPostAlert}
            visible={postDialog}
          >
            신고하기
          </HiddenButton>
        </li>
        <li>
          <HiddenButton type="button" isDialog={isPostDialog}>
            모달창 닫기
          </HiddenButton>
        </li>
      </HiddenMenu>
      {/* 게시글 Alert */}
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <li>
          <AlertButton type="button" isAlert={isPostAlert}>
            취소
          </AlertButton>
        </li>
        <li>
          <AlertButton type="button">신고</AlertButton>
        </li>
      </Alert>
      게시글 모달
      <HiddenMenu visible={navDialog}>
        <li>
          <HiddenButton type="button" isAlert={isNavAlert} visible={navDialog}>
            신고하기
          </HiddenButton>
        </li>
        <li>
          <HiddenButton type="button" isDialog={isNavDialog}>
            모달창 닫기
          </HiddenButton>
        </li>
      </HiddenMenu>
      <Alert visible={postAlert} messageText="게시글을 신고하시겠어요?">
        <li>
          <AlertButton type="button" isAlert={isPostAlert}>
            취소
          </AlertButton>
        </li>
        <li>
          <AlertButton type="button">신고</AlertButton>
        </li>
      </Alert>
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
