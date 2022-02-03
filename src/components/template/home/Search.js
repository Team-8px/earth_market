import React, { useState } from "react";

const LayOut = styled.div``;
const List = styled.div``;

export default function Search() {
  const [test, SetTest] = useState(null);
  return (
    <>
      <Header></Header>
      {test ? (
        <LayOut></LayOut>
      ) : (
        <LayOut>
          <List>
            <SearchUser></SearchUser>
          </List>
        </LayOut>
      )}
      <Navigation></Navigation>
    </>
  );
}
