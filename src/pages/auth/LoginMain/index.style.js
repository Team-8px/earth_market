import styled from "styled-components";
import Kakao from "../../../asset/message-circle.png";
import Google from "../../../asset/google.png";
import FaceBook from "../../../asset/facebook.png";

// 페이지 전체 레이아웃
export const MainLayOut = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 180px;
  background-color: #ea7f42;
`;

// 페이지 하단 컨테이너
export const MainContainer = styled.section`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 50px 0 82px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #767676;
`;

// 페이지 하단 버튼

export const KakaoBtn = styled.button`
  position: relative;
  color: #767676;
  background-color: #fff;
  border: 1px solid #f2c94c;
  margin-bottom: 10px;
  width: 322px;
  height: 44px;
  border-radius: 44px;

  &::before {
    position: absolute;
    left: 14px;
    top: 50%;
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: url(${Kakao}) no-repeat center / 24px 24px;
  }
`;
export const GoogleBtn = styled.button`
  position: relative;
  color: #767676;
  background-color: #fff;
  border: 1px solid #767676;
  margin-bottom: 10px;
  width: 322px;
  height: 44px;
  border-radius: 44px;

  &::before {
    position: absolute;
    left: 14px;
    top: 50%;
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: url(${Google}) no-repeat center / 24px 24px;
  }
`;

export const FaceBookBtn = styled.button`
  position: relative;
  color: #767676;
  background-color: #fff;
  border: 1px solid #2d9cdb;
  margin-bottom: 10px;
  width: 322px;
  height: 44px;
  border-radius: 44px;

  &::before {
    position: absolute;
    left: 14px;
    top: 50%;
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: url(${FaceBook}) no-repeat center / 24px 24px;
  }
`;

// 버튼 안 Icon
