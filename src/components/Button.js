import React from "react";
import styled, { css } from "styled-components";
import Kakao from "../asset/message-circle.png";
import Google from "../asset/google.png";
import FaceBook from "../asset/facebook.png";

const buttonStyles = css`
  position: relative;
  width: ${props => props.width || "100px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
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
  background: url(${Kakao}) no-repeat center / 24px 24px;
`;

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
  ${({ color }) => {
    const selected = color;
    return css`
      background: ${selected};
      }
      ${props =>
        props.outline &&
        css`
          color: #767676;
          background: none;
          border: 1px solid ${selected};
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

const StyledIconButton = styled.button`
  position: relative;
  color: #fff;
  background-color: #fff;
  border: 1px solid #f2c94c;
  margin-bottom: 10px;

  /* 공통 스타일 */
  ${buttonStyles}
  /* 사이즈 */
  ${sizeStyles}
  /* 컬러 */
  ${colorStyles}
  &::before {
    ${iconStyles}
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
  color: "orange",
};

export function IconButton({ children, size, color, ...rest }) {
  return (
    <StyledIconButton size={size} color={color} {...rest}>
      {children}
    </StyledIconButton>
  );
}

IconButton.defaultProps = {
  size: "medium",
  color: "orange",
};
