/**
 * Dialog 기능을 구현하기 위한 컴포넌트 입니다.
 * 설정 버튼을 누를 경우 배경화면이 검게 변하면서 하단에 히든메뉴가 나타나게 됩니다.
 *
 * #1 재영 : HiddenMenuContainer 내부의 list요소들 동적으로 추가하고 빼는방법을
 * 모르겠습니다. 재사용 하기 위해서는 안에 list 요소들의 개수를 동적으로 추가해줘야하는데
 * 아직은 그 방법을 모르겠네요
 */
import React, { Children, useEffect, useState } from "react";
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

const HiddenMenuContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);

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

const HiddenMenuList = styled.ul`
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
    display: flex;
    align-items: center;
    padding-left: 26px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 46px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export function ListBtn({ children, isDialog }) {
  return <Button onClick={isDialog}>{children}</Button>;
}
export function AlertBtn({ children, isAlert }) {
  return <Button onClick={isAlert}>{children}</Button>;
}

export function HiddenMenu({ children, visible }) {
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
    <HiddenMenuContainer disappear={!visible}>
      <HiddenMenuList disappear={!visible}>{children}</HiddenMenuList>
    </HiddenMenuContainer>
  );
}

HiddenMenu.defaultProps = {
  settingText: "사용자 설정 및 프로필",
  logoutText: "로그아웃",
};
