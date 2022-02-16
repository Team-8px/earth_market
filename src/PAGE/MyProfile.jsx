import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useHistory, useParams } from "react-router-dom";
import { listProducts, deleteProduct } from "../actions/productActions";
import { listPosts, deletePost } from "../actions/postActions";
import { getUserMyProfile } from "../actions/userActions";
import { UserInfoBoxInMyProfile } from "../components/module/post/UserInfoBox";
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
import { ProductList, Product } from "../components/module/product/Product";
import dayjs from "dayjs";
import SellProductLink from "../asset/product-img-example-01.jpg";
import MyUserInfo from "../components/module/profile/MyUserInfo";
// import { ProfileImage } from "../components/common/image/ProfileImageStyle";
// import { Button } from "../components/module/button/button";
import prev from "../asset/icon-arrow-left.svg";
import more from "../asset/icon-more-vertical.svg";
// import SellProductLink from "../asset/product-img-example-01.jpg";

// import Product

const MyProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { accountId } = useParams();
  //상품 리스트 배열
  const { products } = useSelector(state => state.productList);
  //게시글 리스트 배열
  const { posts } = useSelector(state => state.postList);
  //나의 프로필 정보
  const { image, username, accountname, intro, followerCount, followingCount } =
    useSelector(state => state.userReadProfile);

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
    dispatch(getUserMyProfile(accountId));
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
      <LayOut>      
      {/* 헤더 */}
      <HeaderLayOut>
        <HeaderContainer>
          <HeaderLink>
            <img src={prev} alt="이전 페이지 버튼" />
          </HeaderLink>
          <HeaderLink>
            <img src={more} alt="더보기 버튼" onClick={isNavDialog} />
          </HeaderLink>
        </HeaderContainer>
      </HeaderLayOut>
      {/* 유저 프로필 */}
        <MyUserInfo
          profileImage={image}
          username={username}
          accountname={accountname}
          intro={intro}
          followerCount={followerCount}
          followingCount={followingCount}
        />
        {/* <Product></Product>   */}
        <SectionContainer>
          <Product>
            {products &&
              products.map(product => {
                return (
                  <ProductList
                    key={product.id}
                    productText={product.itemName}
                    productPrice={product.price}
                    img={product.itemImage}
                    onClick={isProductDialog}
                  />
                );
              })}
          </Product>
        </SectionContainer>
        <SectionContainer>
          <DisplayButton></DisplayButton>
          {/* 게시글 */}
          {posts &&
            posts.map(post => {
              /* 여러개의 게시글 이미지를 여러 개의 문자열로 배열에 담아 나눔 */
              const postImages = post.image.split(",");
              return (
                <PostContainer key={post.id}>
                  <PostWrapper>
                    <Container>
                      <UserInfoBoxInMyProfile
                        profileImage={post.author.image}
                        name={post.author.username}
                        id={post.author.accountname}
                      />
                      <ContentBox content={post.content}>
                        <Link to={`/post/${post.id}`}>
                          <ImgContainer>
                            {postImages &&
                              postImages.map((postImage, i) => {
                                return (
                                  <ImgList key={i}>
                                    <h3>{postImage}</h3>
                                    <img src={postImage} />
                                  </ImgList>
                                );
                              })}

                            <ButtonList>
                              <button></button>
                            </ButtonList>
                          </ImgContainer>
                        </Link>
                        <IconBox
                          like={post.heartCount}
                          comment={post.commentCount}
                        />
                        <Date>
                          {dayjs(post.updatedAt).format("YY년 MM월 DD일")}
                        </Date>
                      </ContentBox>
                      <MoreBtn onClick={isPostDialog} />
                    </Container>
                  </PostWrapper>
                </PostContainer>
              );
            })}
        </SectionContainer>
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
        <AlertBox isAlert={isProductAlert}>취소</AlertBox>
        <AlertBox isAlert={isProductAlert}>삭제</AlertBox>
      </Alert>

      {/* Post Modal */}
      <Modal visible={postDialog}>
        <AlertBtn isAlert={isPostAlert}>삭제</AlertBtn>
        <ListBtn isDialog={isPostDialog}>수정</ListBtn>
        <ListBtn isDialog={isPostDialog}>닫기</ListBtn>
      </Modal>
      {/* Post Alert */}
      <Alert visible={postAlert} messageText="게시글을 삭제할까요?">
        <AlertBox isAlert={isPostAlert}>취소</AlertBox>
        <AlertBox isAlert={isPostAlert}>삭제</AlertBox>
      </Alert>
    </>
  );
};

const HeaderLayOut = styled.header`
  position: sticky;
  width: 100%;
  height: 47.5px;
  min-width: 390px;
  top: 0;
  background-color: #fff;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const HeaderLink = styled(Link)`
  width: 22px;
  height: 22px;
  border: none;
  /* margin-right: 10px; */
  cursor: pointer;
`;

const LayOut = styled.main`
  min-width: 390px;
  width: 100%;
  background: ${theme.palette["bg"]};
  margin: 0 auto;
`;

const PostContainer = styled.section`
  margin-bottom: 0;
`;

const PostWrapper = styled.div`
  margin: 0 auto;
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

const SectionContainer = styled.section`
  border-top: 0.5px solid ${theme.palette["border"]};
  border-bottom: 0.5px solid ${theme.palette["border"]};
  background-color: #fff;
  margin-bottom: 6px;
`;
// const ProductLayOut = styled.article`
//   margin: 20px auto;
//   width: 358px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   overflow-y: hidden;
// `;

export default MyProfile;
