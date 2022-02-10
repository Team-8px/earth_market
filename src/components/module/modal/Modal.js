import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
 from{
   opacity:0
 }
 to{
   opacity:1
 }
 `;

const fadeOut = keyframes`
 from{
   opacity:1
 }
 to{
   opacity:0
 }
 `;

const slideUp = keyframes`
 from{
   transform:translateY(200px)
 }
 to{
   transform:translateY(0px)
 }
 `;

const slideDown = keyframes`
   from {
     transform: translateY(0px);
   }
   to {
     transform: translateY(200px);
   }
 `;

const MenuContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;

  animation-duration: 0.35s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const MenuList = styled.ul`
  width: 100%;
  padding: 36px 0 16px;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #dbdbdb;
  z-index: 10;

  animation-duration: 0.35s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}

  &::before {
    position: absolute;
    content: "";
    top: 16px;
    width: 50px;
    height: 4px;
    background-color: gray;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
  }

  li {
  }
`;

const ListButton = styled.li`
  display: flex;
  align-items: center;
  padding-left: 26px;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

export function ListBtn({ children, isDialog }) {
  return (
    <ListButton>
      <button type="button" onClick={isDialog}>
        {children}
      </button>
    </ListButton>
  );
}

export function AlertBtn({ children, isAlert }) {
  return (
    <ListButton>
      <button type="button" onClick={isAlert}>
        {children}
      </button>
    </ListButton>
  );
}
export function Modal({ children, visible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }

    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  return (
    <MenuContainer disappear={!visible}>
      <MenuList disappear={!visible}>{children}</MenuList>
    </MenuContainer>
  );
}

Modal.defaultProps = {
  settingText: "사용자 설정 및 프로필",
  logoutText: "로그아웃",
};
