import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert, AlertBox } from "../../module/alert/Alert";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
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
        <AlertBtn isAlert={isNavAlert}>로그아웃</AlertBtn>
        <ListBtn isDialog={isNavDialog}>닫기</ListBtn>
      </Modal>
      {/* Nav Alert */}
      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBox isAlert={isNavAlert}>예</AlertBox>
        <AlertBox isAlert={isNavAlert}>아니요</AlertBox>
      </Alert>
    </>
  );
};

export default CommonHeader;
