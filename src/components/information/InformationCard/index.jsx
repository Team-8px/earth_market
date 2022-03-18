import React from "react";
import { InformationItem, InformationWrapper, InformationLink, InformationImg, InformationInfoWrapper, InformationTitle, InformationText, InformationInfo, InformationDate } from "./index.style.js"
import basicImg from "../../../asset/upload_bg.svg";


function InformationCard({ Link, newsimage, newstitle, newstext, newsdate }) {
  const trigger = e => {
    e.target.src = basicImg;
  };

  return (
    <InformationItem>
      <InformationWrapper to={Link}>
        <InformationLink to="/">
          <InformationImg src={newsimage} alt="소식 이미지" onError={e => trigger(e)} />
          <InformationInfoWrapper>
            <InformationInfo>농촌진흥청</InformationInfo>
            <InformationDate>{newsdate}</InformationDate>
            <InformationTitle>{newstitle}</InformationTitle>
            <InformationText>{newstext}</InformationText>
          </InformationInfoWrapper>
        </InformationLink>
      </InformationWrapper>
    </InformationItem >
  );
}
export default InformationCard;