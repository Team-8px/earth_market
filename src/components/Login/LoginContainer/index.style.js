import styled, { keyframes } from "styled-components";

export const LoginContainerSection = styled.section`
  width: 100%;
  height: 100%;
`;
const slideUp = keyframes`
    from{
        background-color: #fff;
    }
    to{
        background-color: #3f97fb;
    }
`;
export const LoginContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;
