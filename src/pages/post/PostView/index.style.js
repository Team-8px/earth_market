import styled from "styled-components";
import { PostViewMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(PostViewMainLayOut)``;

export const CommentContainer = styled.div`
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

export const CommentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;

  img {
    margin-right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 0.5px solid #dbdbdb;
  }

  strong {
    margin: 6px 6px 0 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  span {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    color: #767676;
    margin-top: 8.5px;
    &::before {
      content: "·";
      margin-right: 4px;
    }
  }
`;

export const CommentText = styled.p`
    padding-left: 48px;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
`;
