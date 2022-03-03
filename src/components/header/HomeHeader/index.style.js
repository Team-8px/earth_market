import styled from "styled-components";

export const FollowHeaderLayOut = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;
  height: 48px;
  top: 0;
  background-color: #fff;
  z-index: 10;
  padding: 0 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const SearchBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  cursor: pointer;
`;

export const HeaderTitle = styled.h2`
  margin-left: 8px;
  font-weight: 500;
  font-size: 18px;
`;
