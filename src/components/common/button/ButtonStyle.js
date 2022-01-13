import styled, { css } from "styled-components";

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
  ${({ theme, color }) => {
    const selected = theme.palette[color];
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
  width: ${props => props.width || "100px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  /* 사이즈 */
  ${sizeStyles}

  /* 컬러 */
  ${colorStyles}

  /* 구분짓기 위함 */
  &+& {
    margin-left: 30px;
  }
`;

function Button({ children, size, width, color, ...rest }) {
  return (
    <StyledButton size={size} width={width} color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defalutProps = {
  children: "",
  size: "md",
  color: "orange",
};

export default Button;
