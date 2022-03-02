import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, PreBtn } from "./index.style";
import PrevBtn from "../../../asset/icon-arrow-left.svg";

const UploadHeader = () => {
  const history = useHistory();
  return (
    <>
        <HeaderContainer>
          <PreBtn onClick={() => history.goBack()} >
            <img src={PrevBtn} alt="이전 페이지 버튼" />
          </PreBtn>
        </HeaderContainer>
    </>
  );
};

export default UploadHeader;