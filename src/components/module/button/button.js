// 기존 로직 적용
import React from "react";
import styled, { css } from "styled-components";

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
          color: ${theme.palette["subText"]};
          background: none;
          border: 1px solid ${borderTheme};
        `},
        ${props =>
          props.off &&
          css`
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

export default function Button({ children, size, color, ...rest }) {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: "md",
  color: "main",
};
