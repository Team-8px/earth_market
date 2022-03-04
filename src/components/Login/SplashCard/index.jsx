import React from "react";
import { SplashSection, SplashImg } from "./index.style";

function SplashCard({ loading }) {
  return (
    <SplashSection className={loading ? "down" : "up"}>
      <SplashImg />
    </SplashSection>
  );
}
export default SplashCard;
