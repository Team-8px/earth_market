import React from "react";
import styled from "styled-components";
import NotFound from "../components/etc/NotFound";

const TestNotFound = () => {
  return (
    <LayOut>
      <NotFound />
    </LayOut>
  );
};

const LayOut = styled.main`
  height: 100vh;
  ${props => props.theme.common["flexCenterColumn"]}
  justify-content: center;
`;

export default TestNotFound;
