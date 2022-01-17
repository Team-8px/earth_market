import styled from "styled-components";

import Kakao from "../asset/message-circle.png";
import Google from "../asset/google.png";
import FaceBook from "../asset/facebook.png";
// 이거 경로 안맞음

export const Button = styled.button`
  /* 사이즈 */
  width: 322px;
  height: 44px;
  border-radius: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc7a7;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  /* 기본설정 */
  border: none;
  cursor: pointer;
  padding: 0;
`;

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
