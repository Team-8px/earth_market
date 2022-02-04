import React, { useState } from "react";
import styled from "styled-components";
const LayOut = styled.main``;
const Container = styled.section``;

function HomeFeed() {
  const [test, SetTest] = useState(null);
  return <div>HomeFeed</div>;
  /* <Header></Header>
      {test ? (
        <LayOut>
          <HomeLogo></HomeLogo>
          <Button></Button>
        </LayOut>
      ) : (
        <LayOut>
          <PostLayOut>
            <UserInfoBox></UserInfoBox>
            <ContentBox></ContentBox>
            <IconBox></IconBox>
            <Date></Date>
          </PostLayOut>
        </LayOut>
      )}
      <Navigation></Navigation> */
}

export default HomeFeed;
