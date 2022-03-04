import styled from "styled-components";
import grayLogo from "../../../asset/symbol-logo-gray.svg";

export const ProfileSection = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px 0;
  height: calc(100% - 108px);
  overflow-y: scroll;
  min-width: 390px;
  width: 100%;
  min-width: 100%;
`;

export const NoneFeed = styled.p`
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  font-weight: 400;
  &::before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background: url(${grayLogo}) no-repeat center / contain;
    margin: 0 auto 20px;
  }
`;
export const SearchBtn = styled.button.attrs({ type: "button" })`
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
