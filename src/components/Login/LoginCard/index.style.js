import styled, { keyframes } from "styled-components";

const slideup = keyframes`
from{
  transform:translateY(0)
}
to{
  transform:translateY(-25rem)
}
`;

export const LoginList = styled.ul`
  position: fixed;
  bottom: -14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.up {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideup};
    animation-fill-mode: forwards;
  }
`;

export const LoginItem = styled.li`
  margin-bottom: 25px;
`;

export const LoginBtn = styled.button`
  position: relative;
  width: 322px;
  height: 44px;
  background: ${props => props.theme.palette["white"]};
  color: ${props => props.theme.palette["subText"]};
  font-size: 14px;
  cursor: pointer;
  border-radius: 44px;
  &::before {
    position: absolute;
    left: 16px;
    top: 50%;
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    background: url(${props => props.icon}) no-repeat center / 24px 24px;
  }
`;
