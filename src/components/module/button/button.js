// 기존 로직 적용
import React from "react";
import styled, { css } from "styled-components";
import faceBook from "../../../asset/facebook.png";
import chatImage from "../../../asset/icon/icon-message-circle.png";
import shareImage from "../../../asset/icon/icon-share.png";
// import google from "../asset/google.png";
// import kakao from "../asset/facebook.png";

const buttonStyles = css`
  position: relative;
  width: ${props => props.width || "100px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
`;

const iconStyles = css`
  position: absolute;
  left: 14px;
  top: 50%;
  display: block;
  content: "";
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  background: url(${props => props.icon || faceBook}) no-repeat center / 24px
    24px;
`;

const chatStyles = css`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  background: url(${chatImage}) no-repeat center / 20px 20px;
}
`

const shareStyles = css`
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  background: url(${shareImage}) no-repeat center / 20px 20px;
}
`
const sizeMap = {
  lg: {
    height: "44px",
    fontSize: "14px",
    boarderRadius: "44px",
  },
  md: {
    height: "34px",
    fontSize: "14px",
    boarderRadius: "30px",
  },
  ms: {
    height: "32px",
    fontSize: "14px",
    boarderRadius: "32px",
  },
  sm: {
    height: "28px",
    boarderRadius: "28px",
    fontSize: "12px",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizeMap[size].height};
    border-radius: ${sizeMap[size].boarderRadius};
    font-size: ${sizeMap[size].fontSize};
  `}
`;

const colorStyles = css`
  ${({ color, theme, border }) => {
    const selected = theme.palette[color];
    const borderTheme = theme.palette[border];
    return css`
      background: ${selected};
      }
      ${props =>
        props.outline &&
        css`
          color: #fff;
          background: none;
          border: 1px solid ${borderTheme};
        `},

        ${props =>
          props.isButtonStatus
            ? css`
                color: #fff;
                border: none;
                background: ${theme.palette["main"]};
              `
            : css`
                color: #fff;
                border: none;
                background: ${theme.palette["lightMain"]};
              `}

     `;
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  ${buttonStyles}
  /* 사이즈 */
  ${sizeStyles}
  /* 컬러 */
  ${colorStyles}
`;

const StyledIconButton = styled(StyledButton)`
  &::before {
    ${iconStyles}
  }
`;

const StyledShareButton = styled(StyledButton)`
  {
    ${shareStyles}
  }
`;

const StyledChatButton = styled(StyledButton)`
  {
    ${chatStyles}
  }
`;

export function Button({ children, size, color, ...rest }) {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: "md",
  color: "bg",
};

export function IconButton({ children, size, color, ...rest }) {
  return (
    <StyledIconButton size={size} color={color} {...rest}>
      {children}
    </StyledIconButton>
  );
}

export function ChatButton({ children, size, color, ...rest }) {
  return (
    <StyledChatButton size={size} color={color} {...rest}>
      {children}
    </StyledChatButton>
  );
}

export function ShareButton({ children, size, color, ...rest }) {
  return (
    <StyledShareButton size={size} color={color} {...rest}>
      {children}
    </StyledShareButton>
  );
}
