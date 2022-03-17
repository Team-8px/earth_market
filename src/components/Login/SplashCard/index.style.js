import styled, { keyframes } from "styled-components";
import splashLogoBlue from "../../../asset/full-logo-blue.png";
import splashLogoWhite from "../../../asset/full-logo-white.png";

const ImageFadeOut = keyframes`
from{
  opacity:0
}
to{
  opacity:1
}
`;

const ImageFadeIn = keyframes`
from{
  opacity:1
}
to{
  opacity:0
}
`;

const fadeOut = keyframes`
    from{
        background-color: #fff;
    }
    to{
        background-color: ${props => props.theme.palette["main"]};
    }
`;

const slidedown = keyframes`
from{
  transform:translateY(-10rem)
}
to{
  transform:translateY(0)
}

`;
const slideup = keyframes`
from{
  transform:translateY(5rem)
}
to{
  transform:translateY(-7rem)
}
`;

export const SplashImgWrapper = styled.h1`
  animation-duration: 0.5s;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;

  &.up {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slideup};
    animation-fill-mode: forwards;
  }
  &.down {
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    animation-name: ${slidedown};
    animation-fill-mode: forwards;
  }
`;

export const SplashImg = styled.img.attrs(props => ({
  src: props.className === "blue" ? splashLogoBlue : splashLogoWhite,
  alt: "어스마켓",
}))`
  margin: 0 auto;
  width: 10rem;
  height: 100%;

  &.blue {
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
    animation-name: ${ImageFadeIn};
    animation-fill-mode: forwards;
  }
  &.white {
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
    animation-name: ${ImageFadeOut};
    animation-fill-mode: forwards;
  }
`;
