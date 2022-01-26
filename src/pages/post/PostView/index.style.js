import styled from "styled-components";
import { PostViewMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(PostViewMainLayOut)``;

export const CommentWrapper = styled.div`
  max-width: 390px;
  padding: 20px 16px 0;
  margin: 0 auto;

  ul {
    box-sizing: border-box;
    list-style: none;
  }

  li {
    margin-bottom: 16px;
    position: relative;
  }
`;
