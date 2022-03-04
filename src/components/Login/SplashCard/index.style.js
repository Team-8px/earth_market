import styled, { keyframes } from "styled-components";
import splashLogo from "../../../asset/icon/full-logo.svg";


const slideUp = keyframes`
    from{
        background-color: #fff;
    }
    to{
        background-color: #3f97fb;
    }
`;

export const SplashSection = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  justify-content: center;

  position: relative;
  background-color: #fff;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export const SplashImg = styled.img.attrs({ src: splashLogo })`
  margin: 0 auto;
  width: 200px;
  height: 100%;
`;
