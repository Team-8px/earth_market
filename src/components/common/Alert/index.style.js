import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
 from{
   transform:translateY(100px)
 }
 to{
   transform:translateY(0px)
 }
 `;
export const AlertContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export const AlertWrapper = styled.div`
  width: 252px;
  background: #fff;
  border-radius: 10px;
`;

export const AlertMessage = styled.strong`
  display: block;
  padding: 22px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const AlertList = styled.ul`
  display: flex;
  width: 100%;
  border-top: 0.5px solid #dbdbdb;
`;

export const AlertItem = styled.li`
  width: 50%;

  &:nth-child(2) {
    border-left: 0.5px solid ${props => props.theme.palette["border"]};
  }

  button {
    width: 100%;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  &:nth-child(2) button {
    color: #f26e22;
  }
`;
