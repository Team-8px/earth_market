import styled, { keyframes } from "styled-components";
import splashLogoBlue from "../../../asset/icon/full-logo.svg";
import splashLogoWhite from "../../../asset/full-logo-white.svg";

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
  transform:translateY(50px)
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

export const SplashImg = styled.img.attrs(props => ({
  src: props.className === "true" ? splashLogoBlue : splashLogoWhite,
}))`
  margin: 0 auto;
  width: 200px;
  height: 100%;

  &.true {
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
    animation-name: ${ImageFadeIn};
    animation-fill-mode: forwards;
  }
  &.false {
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
    animation-name: ${ImageFadeOut};
    animation-fill-mode: forwards;
  }
`;