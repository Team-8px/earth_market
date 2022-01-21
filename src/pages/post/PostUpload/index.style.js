import styled from "styled-components";
import { PostMainLayout } from "../../../components/MainLayOut";

export const MainLayOut = styled(PostMainLayout)`
  display: flex;
  padding: 20px 0 20px 16px; // 오른쪽은 0px로 둔 이유는 스크롤 바 때문입니다.
`;
