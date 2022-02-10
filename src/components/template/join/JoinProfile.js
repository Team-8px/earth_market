import React from "react";
import styled from "styled-components";
import { Button } from "../../module/button/button";
import ProfileForm from "../../module/form/ProfileForm";
import ProfileUpload from "../../module/profile/ProfileIUpload";
import LoginTitle, { SubTitleTitle } from "../../module/title/LoginTitle";

const JoinProfile = () => {
  return (
    <>
      <LayOut>
        <LoginTitle>
          프로필 설정
          <SubTitleTitle />
        </LoginTitle>
        <ProfileUpload></ProfileUpload>
        <ProfileForm></ProfileForm>
        <Button width="322px" size="lg" off>
          감귤마켓 시작하세요 안녕하세요.
        </Button>
      </LayOut>
    </>
  );
};

const LayOut = styled.main`
  ${props => props.theme.common.flexCenterColumn}
`;

export default JoinProfile;
