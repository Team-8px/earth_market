import styled, { css } from "styled-components";
import theme from "../styles/theme";

// 플렉스 속성과 관련해서는 @mixin을 잘 활용할 수 있는 방법을 찾아봐야한다.

const AlignCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLayOut = css`
  min-width: 390px;
  width: 100%;
  height: 100%;
  margin-top: 48px;
`;

const Fiexd = css`
  position: fixed;
  height: calc(100% - 108px);
  overflow-y: scroll;
`;

const FullWidth = css`
  min-width: 100%;
`;

// ✅ Auth 페이지 레이아웃

export const JoinMemberShipMainLayOut = styled.main`
  ${({ theme }) => theme.common.flexCenterColumn};
`;
export const LoginEmailMainLayOut = styled.main`
  ${AlignCenter}
`;
export const LoginMainMainLayOut = styled.main`
  ${AlignCenter}
  width: 100%;
  height: 100%;
  padding-top: 180px;
  background-color: #ea7f42;
`;
export const SetMemberShipMainLayOut = styled.main`
  ${AlignCenter}
`;

// Chat 페이지 레이아웃

export const ChatListMainLayOut = styled.main`
  ${MainLayOut}
  justify-content: center;
  position: fixed;
  display: flex;
  padding: 24px 16px;
  overflow-y: scroll;
`;

export const ChatRoomMainLayOut = styled.main`
  ${MainLayOut}
  position: fixed;
  display: flex;
  padding: 24px 16px;
  overflow-y: scroll;
  // 상대 입력시 UI ??
  // 본인 입력시 UI ??
`;

// ✅ home 페이지 레이아웃

export const HomeFeedMainLayOut = styled.main`
  ${Fiexd}
  ${MainLayOut}
  ${FullWidth} 
  ${AlignCenter}
  padding: 20px 16px 0;
`;

export const HomeMainMainLayOut = styled.main`
  ${Fiexd}
  ${MainLayOut}
  ${FullWidth} 
  ${AlignCenter}
  padding: 20px 16px 0;
`;
export const SearchMainLayOut = styled.main`
  ${Fiexd}
  ${MainLayOut}
  ${FullWidth}
  display:flex;
  justify-content: center;
  padding: 20px 16px;
`;

// post 페이지 레이아웃

export const PostMainLayout = styled.main`
  ${MainLayOut}
`;
export const PostViewMainLayOut = styled.main`
  ${MainLayOut}
  ${FullWidth}
  ${Fiexd}
`;

// product 페이지 레이아웃

export const ProductUpdateMainLayOut = styled.main`
  ${MainLayOut}
  display: flex;
  justify-content: center;
`;
export const ProductUploadMainLayOut = styled.main`
  ${MainLayOut}
  display:flex;
  justify-content: center;
  flex-direction: row;
  align-items: stretch;
`;

// profile 페이지 레이아웃

export const FolloMainLayOut = styled.main`
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

export const ProfileModifiCationMainLayOut = styled.main`
  ${MainLayOut}
  display: flex;
  justify-content: center;
`;
//MyProfile,YourProfile

export const ProfileMainLayOut = styled.main`
  ${MainLayOut}
`;

// Screen 페이지 레이아웃
// NotFound 레이아웃은 view 컴포넌트 style 컴포넌트에 보관
// SplashScreenLayOut 역시 똑같다.

export const NotFoundLayOut = styled.main``;
export const SplashScreenLayOut = styled.main``;
