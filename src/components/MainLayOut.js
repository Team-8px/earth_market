import styled, { css } from "styled-components";

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
  ${AlignCenter}
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

// ChatRoom 부재

export const ChatMainLayOut = styled.main`
  ${MainLayOut}
  justify-content: center;
  position: fixed;
  display: flex;
  padding: 24px 16px;
  overflow-y: scroll;
`;

// ✅ home 페이지 레이아웃

export const HomeMainLayOut = styled.main`
  ${Fiexd}
  ${AlignCenter}
  ${FullWidth}
  padding: 20px 16px 0;
  margin-top: 48px;
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
  justify-content: center;
  flex-direction: row;
  align-items: stretch;
`;

// profile 페이지 레이아웃

export const FolloMainLayOut = styled.main`
  ${MainLayOut}
`;

export const MyProfileMainLayOut = styled.main`
  ${MainLayOut}
`;

export const ProfileModifiCationMainLayOut = styled.main`
  ${MainLayOut}
  display: flex;
  justify-content: center;
`;

export const YourProfileMainLayOut = styled.main`
  ${MainLayOut}
`;

// Screen 페이지 레이아웃

export const NotFoundLayOut = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 200px;
`;
export const SplashScreenLayOut = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 180px;
  ${MainLayOut}
`;
