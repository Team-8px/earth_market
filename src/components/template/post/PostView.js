// import React, { useState } from "react";
// import styled from "styled-components";
// import UserInfoBox from "../../module/post/UserInfoBox";
// import {
//   ContentBox,
//   ImgContainer,
//   ButtonList,
//   ImgList,
// } from "../../module/post/ContentBox";
// import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
// import { Alert, AlertBox } from "../../module/alert/Alert";
// import IconBox from "../../module/post/IconBox";
// import Date from "../../module/post/Date";
// import testImg from "../../../asset/Ellipse 6.png";
// import testImg2 from "../../../asset/8px.png";
// import more from "../../../asset/icon-more-vertical.svg";
// import Header from "../common/Header";
// import ReplyBox from "../../module/post/ReplyBox";
// import { CommentUser } from "../../module/user/CommentUser";

// const PostView = () => {
//   // 🕹 네비게이션 메뉴
//   const [navDialog, setNavDialog] = useState(false);
//   const [navAlert, setNavAlert] = useState(false);
//   const isNavDialog = () => setNavDialog(!navDialog);
//   const isNavAlert = () => setNavAlert(!navAlert);

//   // 🏞 게시글 메뉴
//   const [postDialog, setPostDialog] = useState(false);
//   const [postAlert, setPostAlert] = useState(false);
//   const isPostDialog = () => setPostDialog(!postDialog);
//   const isPostAlert = () => setPostAlert(!postAlert);

//   // 💬 댓글 메뉴
//   const [chatDialog, setChatDialog] = useState(false);
//   const [chatAlert, setChatAlert] = useState(false);
//   const isChatDialog = () => setChatDialog(!chatDialog);
//   const isChatAlert = () => setChatAlert(!chatAlert);

//   return (
//     <>
//       <Header />
//       <LayOut>
//         <PostLayOut>
//           <Container>
//             {/* 유저 인포 */}
//             <UserInfoBox name="text" id="id" />
//             {/* 게시글 영역 */}
//             <ContentBox content="content">
//               <ImgContainer>
//                 <ImgList>
//                   <img src={testImg2} alt="testImg2" />
//                 </ImgList>
//                 <ButtonList>
//                   <button></button>
//                 </ButtonList>
//               </ImgContainer>
//               <IconBox like="9999" comment="9999" />
//               <Date>2022년 2월 4일</Date>
//             </ContentBox>
//             <MoreBtn onClick={isPostDialog} />
//           </Container>
//         </PostLayOut>
//         <ReplyBox></ReplyBox>
//         {/* <ConmentBox></ConmentBox> */}
//         <button onClick={isNavDialog}>isNavDialog버튼</button>
//         <button onClick={isChatDialog}>isChatDialog버튼</button>
//       </LayOut>

//       {/* Nav Modal */}
//       <Modal visible={navDialog}>
//         <ListBtn isDialog={isNavDialog}>설정 및 개인정보</ListBtn>
//         <AlertBtn isAlert={isNavAlert}>로그아웃</AlertBtn>
//         <ListBtn isDialog={isNavDialog}>모달창 닫기</ListBtn>
//       </Modal>
//       {/* Nav Alert */}
//       <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
//         <AlertBox isAlert={isNavAlert}>예</AlertBox>
//         <AlertBox isAlert={isNavAlert}>아니요</AlertBox>
//       </Alert>

//       {/* Post Modal */}
//       <Modal visible={postDialog}>
//         <AlertBtn isAlert={isPostAlert}>신고하기</AlertBtn>
//         <ListBtn isDialog={isPostDialog}>모달창 닫기</ListBtn>
//       </Modal>
//       {/* Post Alert */}
//       <Alert visible={postAlert} messageText="신고하시겠어요?">
//         <AlertBox isAlert={isPostAlert}>예</AlertBox>
//         <AlertBox isAlert={isPostAlert}>아니요</AlertBox>
//       </Alert>

//       {/* chat Modal */}
//       <Modal visible={chatDialog}>
//         <AlertBtn isAlert={isChatAlert}>신고하기</AlertBtn>
//         <ListBtn isDialog={isChatDialog}>모달창 닫기</ListBtn>
//       </Modal>

//       {/* chat Alert */}
//       <Alert visible={chatAlert} messageText="신고하시겠어요?">
//         <AlertBox isAlert={isChatAlert}>예</AlertBox>
//         <AlertBox isAlert={isChatAlert}>아니요</AlertBox>
//       </Alert>
//     </>
//   );
// };

// const LayOut = styled.main`
//   min-width: 390px;
//   width: 100%;
//   min-width: 100%;
//   height: 100%;
//   margin-top: 48px;
//   position: fixed;
//   height: calc(100% - 108px);
//   overflow-y: scroll;
// `;
// const PostLayOut = styled.div`
//   width: 100%;
//   padding: 20px 16px;
//   border-bottom: 1px solid ${props => props.theme.palette["border"]};
// `;
// const Container = styled.article`
//   position: relative;
//   max-width: 358px;
//   width: 100%;
//   margin: 0 auto;
// `;

// const MoreBtn = styled.button`
//   position: absolute;
//   top: 4px;
//   right: 0;
//   width: 18px;
//   height: 18px;
//   background: url(${more}) no-repeat center / 18px 18px;
//   background-color: inherit;
// `;

// export default PostView;
