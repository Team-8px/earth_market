import styled from "styled-components";
import notFoundSvg from "../../../asset/full-logo-blue.png";

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingIcon = styled.img.attrs({
  src: notFoundSvg,
  alt: "로딩 중입니다",
})`
  width: 158px;
  margin-bottom: 32px;
`;

export const LoadingSubText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: ${props => props.theme.palette["subText"]};
  text-align: center;
  margin-bottom: 20px;
`;

export const PrevBtn = styled.button`
  width: 120px;
  height: 34px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.palette["main"]};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
