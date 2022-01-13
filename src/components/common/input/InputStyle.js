import styled from "styled-components";

const Input = styled.input`
  width: ${props => props.width || "100%"};
  // width로 따로 값을 지정해주지 않은 이상 defalut값은 100%이다.
  height: 34px;
  margin-top: 16px;
  line-height: 34px;
  font-size: 20px;
  background: grey;
  &::placeholder {
    color: #999;
  }
`;

export default Input;

// text-Active-input
