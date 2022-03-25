import styled from "styled-components";
import MoreButton from "../../../asset/icon/icon-more-vertical.png";

export const CommentLayout = styled.section`
  width: 100%;
  padding: 16px 20px 16px 16px;
  box-sizing: border-box;
  border-top: 1px solid #dbdbdb;
`;

export const CommentListBox = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  max-width: 390px;
  margin: 0 auto;
  list-style: none;
`;
export const CommentItemBox = styled.li`
  margin-bottom: 16px;
  position: relative;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
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
    margin-top: 2px;
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

export const CommentBox = styled.button`
  content: "";
  position: absolute;
  top: 10px;
  right: 0px;
  width: 20px;
  height: 20px;
  background-image: url(${MoreButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
