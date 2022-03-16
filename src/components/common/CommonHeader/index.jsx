import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userActions";
import { Alert, AlertBtn } from "../Alert";
import { Modal, ModalListBtn, ModalAlertBtn } from "../Modal";
import {
  HeaderLayout,
  PrevLink,
  PrevIcon,
  MoreBtn,
  MoreIcon,
} from "./index.style";

const CommonHeader = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [navDialog, setNavDialog] = useState(false);

  const [navAlert, setNavAlert] = useState(false);

  const isNavDialog = () => setNavDialog(!navDialog);

  const isNavAlert = () => setNavAlert(!navAlert);

  const logoutHandler = () => dispatch(logout());

  return (
    <>
      <HeaderLayout>
        <PrevLink to={props.location.state.prevPath}>
          <PrevIcon />
        </PrevLink>
        <MoreBtn>
          <MoreIcon onClick={isNavDialog} />
        </MoreBtn>
      </HeaderLayout>

      <Modal visible={navDialog}>
        <ModalAlertBtn isAlert={isNavAlert}>로그아웃</ModalAlertBtn>
        <ModalListBtn isDialog={isNavDialog}>닫기</ModalListBtn>
      </Modal>

      <Alert visible={navAlert} messageText="로그아웃 하시겠어요?">
        <AlertBtn isAlert={logoutHandler}>예</AlertBtn>
        <AlertBtn isAlert={isNavAlert}>아니요</AlertBtn>
      </Alert>
    </>
  );
};

export default CommonHeader;
