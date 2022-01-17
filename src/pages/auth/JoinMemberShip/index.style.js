import styled from "styled-components";

export const MainLayOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin: 30px 0 40px;
  text-align: center;
`;

export const Button = styled.button`
  /* 사이즈 */
  width: 322px;
  height: 44px;
  border-radius: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc7a7;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  /* 기본설정 */
  border: none;
  cursor: pointer;
  padding: 0;
`;
