import React from "react";
import styled from "styled-components";
import Navbar from "../components/common/Navbar";

// 작업완료
import CommonHeader from "../components/common/CommonHeader";
import ProfileContainer from "../components/profile/ProfileContainer";
import ProductContainer from "../components/profile/ProductContainer";
import GalleryContainer from "../components/profile/GalleryContainer";

const MyProfile = () => {
  // 주소창에서 accountId를 불러온다
  /*  const { accountId } = useParams();
  console.log(useParams()?.accountId); */
  //console.log("accountId", accountId);
  // 로컬스토리지에서 accountName을 불러온다
  /*  const {
    user: { accountname },
  } = JSON.parse(localStorage.getItem("userInfo")); */
  //console.log("accountname", accountname);

  // accountName이 존재하지 않을경우? 체크로그인의 값은 accountId
  // accountName이 존재할 경우? 체크로그인의 값은 accountId

  // 로컬 : accountname
  // 파람스 : accountId

  /* const [checkLoginUser, setCheckLoginUser] = useState(
    accountId ? accountname : accountId, */
  // 파람스가 없다는 것은 내 프로필을 세팅할 것이다
  // 파람스가 있다는 것은 너의 프로필을 세팅할 것이다

  /* useEffect(() => {
    setCheckLoginUser(accountId ? accountname : accountId);
  }, [accountname]); */

  //console.log(checkLoginUser && checkLoginUser);

  // 좋아요
  /* const [isLikeAction, setLikeAction] = useState(false);
  console.log(isLikeAction && isLikeAction, "isLikeAction");
  const likeAction = () => setLikeAction(!isLikeAction); */

  return (
    <>
      <CommonHeader />
      <MainSection>
        {/* 유저 프로필 */}
        <ProfileContainer />
        {/* 상품 */}
        <ProductContainer />
        {/* 게시글 */}
        <GalleryContainer />
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
