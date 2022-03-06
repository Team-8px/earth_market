import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/common/Navbar";

// 작업완료
import CommonHeader from "../components/common/CommonHeader";
import ProfileContainer from "../components/profile/ProfileContainer";
import ProductContainer from "../components/profile/ProductContainer";
import GalleryContainer from "../components/profile/GalleryContainer";

const MyProfile = () => {
  // 주소창에서 accountId를 불러온다
  const { accountId } = useParams();
  console.log("accountId", accountId);
  // 로컬스토리지에서 accountName을 불러온다
  const {
    user: { accountname },
  } = JSON.parse(localStorage.getItem("userInfo"));
  console.log("accountname", accountname);

  // accountName이 존재하지 않을경우? 체크로그인의 값은 accountId
  // accountName이 존재할 경우? 체크로그인의 값은 accountId

  // accountname이 undefined인 상황이 무엇인지 모르겠음
  const [checkLoginUser, setCheckLoginUser] = useState(
    typeof accountname === "undefined" ? accountname : accountId,
  );

  useEffect(() => {
    setCheckLoginUser(
      typeof accountname === "undefined" ? accountname : accountId,
    );
  }, [accountname]);

  // 좋아요
  /* const [isLikeAction, setLikeAction] = useState(false);
  console.log(isLikeAction && isLikeAction, "isLikeAction");
  const likeAction = () => setLikeAction(!isLikeAction); */

  return (
    <>
      <CommonHeader />
      <MainSection>
        {/* 유저 프로필 */}
        <ProfileContainer whichUser={checkLoginUser} />
        {/* 상품 */}
        <ProductContainer whichUser={checkLoginUser} />
        {/* 게시글 */}
        <GalleryContainer whichUser={checkLoginUser} />
      </MainSection>
      <Navbar />
    </>
  );
};

const MainSection = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette["bg"]};
`;

export default MyProfile;
