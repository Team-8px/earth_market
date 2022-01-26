import React, { useState } from "react";
import {
  MainLayOut,
  ProductContainer,
  ProductWrapper,
  UserPostContainer,
  UserPostWrapper,
} from "./index.style";
import DisplayHandler from "../../../components/DisplayHandler";
import Alert from "../../../components/Alert";
import HiddenMenu from "../../../components/HiddenMenu";
import { HeaderBasic, Nav } from "../../../components/Header";
import UserInfo from "../../../components/UserInfo";
import SellProduct from "../../../components/SellProduct";

const YourProfile = () => {
  // <!----------스타일 관련 상태관리---------->
  const [dialog, setDialog] = useState(false);
  const [alert, setAlert] = useState(false);

  const onAlert = () => {
    console.log("확인");
    setAlert(true);
  };
  const offAlert = () => {
    console.log("취소");
    setAlert(false);
  };

  const onDialog = () => {
    console.log("확인");
    setDialog(true);
  };
  const offDialog = () => {
    console.log("취소");
    setDialog(false);
  };
  // <!----------스타일 관련 상태관리---------->
  return (
    <>
      <MainLayOut>
        <HeaderBasic />
        <UserInfo></UserInfo>
        <ProductContainer>
          <ProductWrapper>
            <SellProduct />
          </ProductWrapper>
        </ProductContainer>
        <UserPostContainer>
          <UserPostWrapper>
            <DisplayHandler />
          </UserPostWrapper>
        </UserPostContainer>
      </MainLayOut>
      <button type="button" onClick={onDialog}>
        클릭하면 열립니다
      </button>
      <HiddenMenu visible={dialog} onAlert={onAlert} offDialog={offDialog} />
      <Alert
        visible={alert}
        offAlert={offAlert}
        MessageText="로그아웃 하시겠습니까?"
      />
    </>
  );
};

export default YourProfile;
