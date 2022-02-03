import React from "react";

// myProfile 부분입니다.
// yourProfile 부분입니다.

const LayOut = styled.div``;

export default function Profile() {
  return (
    <>
      <Header></Header>
      {/* 프로필 */}
      <Profile></Profile>
      {/* 상품 */}
      <Product></Product>
      {/* 핸들러 */}
      <Handler></Handler>
      {/* 게시글 */}
      <LayOut>
        <Post></Post>
      </LayOut>
      <Navigation></Navigation>
    </>
  );
}
