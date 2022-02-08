import React from "react";
import styled from "styled-components";
import { Button } from "../../module/button/Button";
import SubText from "../../module/Text/SubText";

const NotFound = () => {
  return (
    <LayOut>
      {/* <NotFoundLogo></NotFoundLogo> */}
      <SubText>페이지를 찾을 수 없습니다. :(</SubText>
      <Button width="120px" size="lg">
        이전페이지
      </Button>
    </LayOut>
  );
};

const LayOut = styled.main`
  height: 100vh;
  ${props => props.theme.common["flexCenterColumn"]}
  justify-content: center;
`;

export default NotFound;
