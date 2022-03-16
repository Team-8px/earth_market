import styled from "styled-components";
import grayLogo from "../../../asset/symbol-logo-gray.svg";

export const ProfileSection = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 20px;
  height: calc(100% - 108px);
  overflow-y: scroll;
  width: 100vw;
`;

export const NoneFollowContainer = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100% - 108px);
`;

export const NoneFeed = styled.span`
  color: ${props => props.theme.palette["subText"]};
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  &::before {
    content: "";
    display: block;
    width: 158px;
    height: 158px;
    background: url(${grayLogo}) no-repeat center / contain;
    margin: 0 auto 32px;
  }
`;

export const SearchBtn = styled.button.attrs({ type: "button" })`
  width: 110px;
  height: 40px;
  border-radius: 30px;
  background-color: ${props => props.theme.palette["main"]};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;
