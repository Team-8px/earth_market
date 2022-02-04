import React, { useState } from "react";
import styled from "styled-components";
const LayOut = styled.div``;
const List = styled.div``;

export default function Search() {
  const [test, SetTest] = useState(null);
  return <div>Search</div>;
  /* <Header></Header>
      {test ? (
        <LayOut></LayOut>
      ) : (
        <LayOut>
          <List>
            <SearchUser></SearchUser>
          </List>
        </LayOut>
      )}
      <Navigation></Navigation> */
}
