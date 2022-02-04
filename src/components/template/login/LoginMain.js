import React from "react";

const LayOut = styled.div``;
const Container = styled.div``;

export default function LoginEmail() {
  return (
    <>
      <LayOut>
        <LoginLogo></LoginLogo>
      </LayOut>
      <Container>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <LoginText></LoginText>
      </Container>
    </>
  );
}
