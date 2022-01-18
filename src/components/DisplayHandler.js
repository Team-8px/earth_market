import styled from "styled-components";

import listOn from "../asset/icon/icon-post-list-on.png";
import listOff from "../asset/icon/icon-post-list-off.png";
import postOn from "../asset/icon/icon-post-album-on.png";
import postOff from "../asset/icon/icon-post-album-on.png";

const HandlerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 390px;
  width: 100%;
  height: 44px;
  padding-right: 16px;

  & > button:nth-child(1) {
    width: 26px;
    height: 26px;
    background: url(${listOn}) no-repeat center / contain;
  }
  & > button:nth-child(2) {
    margin-left: 16px;
    width: 26px;
    height: 26px;
    background: url(${postOff}) no-repeat center / contain;
  }
`;

function DisplayHandler() {
  return (
    <HandlerContainer>
      <ButtonWrapper>
        <button></button>
        <button></button>
      </ButtonWrapper>
    </HandlerContainer>
  );
}

export default DisplayHandler;
