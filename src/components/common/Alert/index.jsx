import React, { useEffect, useState } from "react";
import {
  AlertContainer,
  AlertWrapper,
  AlertMessage,
  AlertList,
  AlertItem,
} from "./index.style";

export function AlertBox({ children, isAlert }) {
  return (
    <AlertItem>
      <button type="button" onClick={isAlert}>
        {children}
      </button>
    </AlertItem>
  );
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
    <AlertContainer>
      <AlertWrapper>
        <AlertMessage>{messageText}</AlertMessage>
        <AlertList>{children}</AlertList>
      </AlertWrapper>
    </AlertContainer>
  );
}
