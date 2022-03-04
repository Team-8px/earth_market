import styled, { keyframes } from "styled-components";
import splashLogo from "../../../asset/icon/full-logo.svg";

const fadeOut = keyframes`
    from{
        background-color: #fff;
    }
    to{
        background-color: #3f97fb;
    }
`;

const slidedown = keyframes`
from{
  transform:translateY(-100px)
}
to{
  transform:translateY(0px)
}

`;
const slideup = keyframes`
from{
  transform:translateY(0px)
}
to{
  transform:translateY(-100px)
}
`;

export const SplashSection = styled.main`
  animation-duration: 0.5s;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;

  &.down {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slidedown};
    animation-fill-mode: forwards;
  }
  &.up {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideup};
    animation-fill-mode: forwards;
  }
`;

export const SplashImg = styled.img.attrs({ src: splashLogo })`
  margin: 0 auto;
  width: 200px;
  height: 100%;
`;
