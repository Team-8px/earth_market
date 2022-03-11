import React from "react";
import { InformationList, InformationImgWrapper, InformationImg,InformationInfoWrapper, InformationTitle } from "./index.style.js"
import basicImg from "../../../asset/upload_bg.svg";


function InformationCard({ Link, newsimage, newstitle, newsdate }) {
  const trigger = e => {
    e.target.src = basicImg;
  };

  return (
    <InformationList>
      <InformationImgWrapper to={Link}>
        <InformationImg src={newsimage} alt="소식 이미지" onError={e => trigger(e)} />
      </InformationImgWrapper>
      <InformationInfoWrapper>
        <InformationTitle>{newstitle}</InformationTitle>
        <strong>농촌진흥청</strong>
        <span>{newsdate}</span>
      </InformationInfoWrapper>
    </InformationList>
  );
}
export default InformationCard;