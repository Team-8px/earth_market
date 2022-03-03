import React from "react";
import {
  HeaderSection,
  HeaderContainer,
  IconLink,
  PrevIcon,
  MoreIcon,
} from "./index.style";

const CommonHeader = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <IconLink>
          <PrevIcon />
        </IconLink>
        <IconLink>
          <MoreIcon />
        </IconLink>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default CommonHeader;
