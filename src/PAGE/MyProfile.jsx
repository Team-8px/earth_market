import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { listProducts, deleteProduct } from "../actions/productActions";
import { listPosts, deletePost } from "../actions/postActions";
import { getUserMyProfile } from "../actions/userActions";
import UserInfoBox from "../components/module/post/UserInfoBox";
import {
  ContentBox,
  ImgContainer,
  ButtonList,
  ImgList,
} from "../components/module/post/ContentBox";
import { Modal, AlertBtn, ListBtn } from "../components/module/modal/Modal";
import { Alert, AlertBox } from "../components/module/alert/Alert";
import IconBox from "../components/module/post/IconBox";
import Date from "../components/module/post/Date";
import DisplayButton from "../components/module/profile/DisplayButton";
import more from "../asset/icon-more-vertical.svg";
import Header from "../components/template/common/Header";
import UserInfo from "../components/UserInfo";
import Product from "../components/module/product/Product";
import dayjs from "dayjs";

// import Product
const MyProfile = () => {
  const dispatch = useDispatch();
  //상품 리스트 배열
  const { products } = useSelector(state => state.productList);
  //게시글 리스트 배열
  const { posts } = useSelector(state => state.postList);
  //나의 프로필 정보
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userReadProfile);

  console.log(products, "products");
  console.log(posts, "posts");

  //게시글 삭제 API (이동 가능성 높음)
  const onClickDeletePost = postId => {
    dispatch(deletePost(postId));
  };

  //상품 삭제 API (이동 가능성 높음)
  const onClickDeleteProduct = productId => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    //상품 리스트 얻기
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    //게시글 리스트 얻기
    dispatch(listPosts());
  }, [dispatch]);

  useEffect(() => {
    //나의 프로필 정보 얻기
    dispatch(getUserMyProfile());
  }, [dispatch]);

  // 🕹 네비게이션 Modal & Alert
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);

  // 🏞 게시글 모달 Modal & Alert
  const [postDialog, setPostDialog] = useState(false);
  const [postAlert, setPostAlert] = useState(false);
  const isPostDialog = () => setPostDialog(!postDialog);
  const isPostAlert = () => setPostAlert(!postAlert);

  // 🏞 상품 모달 Modal & Alert
  const [productDialog, setProductDialog] = useState(false);
  const [productAlert, setProductAlert] = useState(false);
  const isProductDialog = () => setProductDialog(!productDialog);
  const isProductAlert = () => setProductAlert(!productAlert);

  return (
    <>
      <Header />
      <LayOut>
        {/* username,
  accoutname,
  intro,
  followerCount,
  followingCount, */}
        <UserInfo
          username={username}
          accoutname={accountname}
          intro={intro}
          followerCount={followerCount}
          followingCount={followingCount}
        />
        <Product></Product>
        <DisplayButton></DisplayButton>

        {posts &&
          posts.map(post => {
            return (
              <PostContainer key={post.id}>
                <PostWrapper>
                  <Container>
                    <UserInfoBox
                      profileImage={post.author.image}
                      name={post.author.username}
                      id={post.author.accountname}
                    />
                    <ContentBox content={post.content}>
                      <ImgContainer>
                        <ImgList>
                          <img src={post.image} />
                        </ImgList>
                        <ButtonList>
                          <button></button>
                        </ButtonList>
                      </ImgContainer>
                      <IconBox
                        like={post.heartCount}
                        comment={post.commentCount}
                      />
                      <Date>
                        {dayjs(post.updatedAt).format("YY년 MM월 DD일")}
                      </Date>
                    </ContentBox>
                    <MoreBtn onClick={isPostDialog} />
                    {/* <button onClick={isNavDialog}>테스트 버튼 삭제 가능</button>
                    <button onClick={isProductDialog}>
                      테스트 버튼 삭제 가능
                    </button> */}
                  </Container>
                </PostWrapper>
              </PostContainer>
            );
          })}
      </LayOut>

      <Modal visible={navDialog}>
        <ListBtn isDialog={isNavDialog}>설정 및 개인정보</ListBtn>
        <AlertBtn isAlert={isNavAlert}>로그아웃</AlertBtn>
        <ListBtn isDialog={isNavDialog}>모달창 닫기</ListBtn>
      </Modal>
      {/* Nav Alert */}
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBox isAlert={isNavAlert}>예</AlertBox>
        <AlertBox isAlert={isNavAlert}>아니요</AlertBox>
      </Alert>

      {/* Product Modal */}
      <Modal visible={productDialog}>
        <AlertBtn isAlert={isProductAlert}>삭제</AlertBtn>
        <ListBtn isDialog={isProductDialog}>수정</ListBtn>
        <ListBtn isDialog={isProductDialog}>웹사이트에서 상품 보기</ListBtn>
      </Modal>
      {/* Product Alert */}
      <Alert visible={productAlert} messageText="상품을 삭제할까요?">
        <AlertBox isAlert={isProductAlert}>예</AlertBox>
        <AlertBox isAlert={isProductAlert}>아니요</AlertBox>
      </Alert>

      {/* Post Modal */}
      <Modal visible={postDialog}>
        <ListBtn isDialog={isPostDialog}>수정</ListBtn>
        <AlertBtn isAlert={isPostAlert}>삭제</AlertBtn>
        <ListBtn isDialog={isPostDialog}>닫기</ListBtn>
      </Modal>
      {/* Post Alert */}
      <Alert visible={postAlert} messageText="게시글을 삭제할까요?">
        <AlertBox isAlert={isPostAlert}>예</AlertBox>
        <AlertBox isAlert={isPostAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

const PostContainer = styled.section`
  ${props => props.theme.common["flexCenterColumn"]}
  margin-bottom: 0;
`;

const PostWrapper = styled.div`
  ${props => props.theme.common["flexCenterColumn"]}
  max-width: 390px;
  width: 100%;
  padding: 16px 16px 70px;
`;

const Container = styled.article`
  position: relative;
  max-width: 358px;
  width: 100%;
  margin-bottom: 20px;
`;

const MoreBtn = styled.button`
  position: absolute;
  top: 4px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${more}) no-repeat center / 18px 18px;
  background-color: inherit;
`;

export default MyProfile;
