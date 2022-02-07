import React from "react";
import styled from "styled-components";
import ProfileUpload from "../../module/profile/ProfileIUpload";
import ProfileForm from "../../module/form/ProfileForm";

export default function ProfileEdit() {
  return (
    <>
      <Header></Header>
      <LayOut>
        <ProfileUpload></ProfileUpload>
        <ProfileForm></ProfileForm>
      </LayOut>
    </>
  );
}

const LayOut = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;
