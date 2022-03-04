import React from "react";
import { SplashSection, SplashImg } from "./index.style";

function SplashCard({ loading }) {
  return (
    <SplashSection className={loading ? "down" : "up"}>
      <SplashImg className={loading ? "blue" : "white"} />
    </SplashSection>
  );
}
export default SplashCard;
