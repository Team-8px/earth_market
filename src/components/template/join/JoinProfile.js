import React from "react";
import styled from "styled-components";
import { Button } from "../../module/button/button";
import ProfileForm from "../../module/form/ProfileForm";
import ProfileUpload from "../../module/profile/ProfileIUpload";

const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
`;

export default function JoinProfile() {
  return (
    <>
      <LayOut>
        {/* <ProfileTitle></ProfileTitle> */}
        {/* <SubTitle></SubTitle> */}
        <ProfileUpload></ProfileUpload>
        <ProfileForm></ProfileForm>
        <Button width="322px" size="lg" off>
          감귤마켓 시작하기
        </Button>
      </LayOut>
    </>
  );
}
