import styled from "styled-components";

export const MainLayOut = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  p {
    color: #767676;
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
      margin: 0 auto 20px;
    }
  }
`;
