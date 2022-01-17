import styled from "styled-components";
import { Main } from "../../../components/MainLayOut";

export const StyledMain = styled(Main)`
  position: fixed; // Y축 스크롤바 제거
  padding: 20px 16px 0;
  margin-top: 48px;
  height: calc(100% - 108px);
  min-width: 100%;
  overflow-y: scroll;

  // 테스트용 백그라운드
  /* background-color: #789; */
`;
