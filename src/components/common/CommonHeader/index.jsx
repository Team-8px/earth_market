import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert, AlertBtn } from "../Alert";
import { Modal, ModalListBtn, ModAlertBtn } from "../Modal";
import {
  HeaderSection,
  HeaderContainer,
  IconLink,
  PrevIcon,
  MoreIcon,
} from "./index.style";

const CommonHeader = () => {
  const history = useHistory();
  const [navDialog, setNavDialog] = useState(false);
  const [navAlert, setNavAlert] = useState(false);
  const isNavDialog = () => setNavDialog(!navDialog);
  const isNavAlert = () => setNavAlert(!navAlert);
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <IconLink>
            <PrevIcon onClick={() => history.goBack()} />
          </IconLink>
          <IconLink>
            <MoreIcon onClick={isNavDialog} />
          </IconLink>
        </HeaderContainer>
      </HeaderSection>
      <Modal visible={navDialog}>
        <ModAlertBtn isAlert={isNavAlert}>로그아웃</ModAlertBtn>
        <ModalListBtn isDialog={isNavDialog}>닫기</ModalListBtn>
      </Modal>
      {/* Nav Alert */}
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBtn isAlert={isNavAlert}>예</AlertBtn>
        <AlertBtn isAlert={isNavAlert}>아니요</AlertBtn>
      </Alert>
    </>
  );
};

export default CommonHeader;
