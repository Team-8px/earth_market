import React from "react";
import styled from "styled-components";
import NotFoundContainer from "../components/etc/NotFoundContainer";

const NotFound = () => {
  return (
    <LayOut>
      <NotFoundContainer />
    </LayOut>
  );
};

const LayOut = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
