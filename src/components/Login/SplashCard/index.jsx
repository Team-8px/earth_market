import React from "react";
import { SplashImgWrapper, SplashImg } from "./index.style";

function SplashCard({ loading }) {
  return (
    <SplashImgWrapper className={loading ? "down" : "up"}>
      <SplashImg className={loading ? "blue" : "white"} />
    </SplashImgWrapper>
  );
}
export default SplashCard;
