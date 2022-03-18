import React from "react";
import {
  InformationItem,
  InformationWrapper,
  InformationLink,
  InformationImg,
  InformationInfoWrapper,
  InformationTitle,
  InformationText,
  InformationInfo,
  InformationDate,
} from "./index.style.js";
import basicImg from "../../../asset/upload_bg.svg";

function InformationCard({ image, title, content, date, link }) {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <InformationItem>
      <InformationWrapper>
        <InformationLink href={link} target="_blank">
          <InformationImg
            src={image}
            alt="소식 이미지"
            onError={e => trigger(e)}
          />
          <InformationInfoWrapper>
            <InformationInfo>농민신문</InformationInfo>
            <InformationDate>{date}</InformationDate>
            <InformationTitle>{title}</InformationTitle>
            <InformationText>{content}</InformationText>
          </InformationInfoWrapper>
        </InformationLink>
      </InformationWrapper>
    </InformationItem>
  );
}
export default InformationCard;
