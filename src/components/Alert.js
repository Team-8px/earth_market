/**
 * Alert 기능을 구현하기 위한 컴포넌트 입니다.
 * 화면에 로그아웃 하시겠습니까? 확인 취소 버튼이 나오게 됩니다.
 */

import React, { children, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
from{
  transform:translateY(100px)
}
to{
  transform:translateY(0px)
}
`;

const AlertModalContainer = styled.section`
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

const AlertModalWrapper = styled.div`
  width: 252px;
  background: #fff;
  border-radius: 10px;
`;

const AlertMessage = styled.strong`
  display: block;
  padding: 22px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const AlertMenuList = styled.ul`
  display: flex;
  width: 100%;
  border-top: 0.5px solid #dbdbdb;

  li {
    width: 50%;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 46px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

function Container({ children }) {
  return (
    <AlertModalContainer>
      <AlertModalWrapper>{children}</AlertModalWrapper>
    </AlertModalContainer>
  );
}

function List({ children }) {
  return <AlertMenuList>{children}</AlertMenuList>;
}

function Message({ children }) {
  return <AlertMessage>{children}</AlertMessage>;
}

export function AlertButton({ children, isAlert }) {
  return <Button onClick={isAlert}>{children}</Button>;
}
export function Alert({ children, visible, messageText }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState();

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 100);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <Container>
      <Message>{messageText}</Message>
      <List>{children}</List>
    </Container>
  );
}
