import React, { useEffect, useState } from "react";
import { ModalContainer, ModalList, ModalItem } from "./index.style";

export function ModalListBtn({ children, isDialog }) {
  return (
    <ModalItem>
      <button type="button" onClick={isDialog}>
        {children}
      </button>
    </ModalItem>
  );
}

export function ModalAlertBtn({ children, isAlert }) {
  return (
    <ModalItem>
      <button type="button" onClick={isAlert}>
        {children}
      </button>
    </ModalItem>
  );
}
export function Modal({ children, visible, close }) {
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
    <ModalContainer disappear={!visible} onClick={() => close()}>
      <ModalList disappear={!visible}>{children}</ModalList>
    </ModalContainer>
  );
}

Modal.defaultProps = {
  settingText: "사용자 설정 및 프로필",
  logoutText: "로그아웃",
};
