import styled from "styled-components";
import Icon from "../../../asset/icon/icon-upload.png";
import { ProductUploadMainLayOut } from "../../../components/MainLayOut";

export const MainLayOut = styled(ProductUploadMainLayOut)``;

export const MainFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;

  form {
    width: 100%;
  }
`;

export const ProductImgWrapper = styled.div`
  margin-bottom: 30px;

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 18px;
  }
  label {
    position: relative;
    display: block;
    width: 100%;
    height: 204px;
    background-color: #f2f2f2;
    border: 0.5 solid #dbdbdb;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    &::after {
      position: absolute;
      right: 12px;
      bottom: 12px;
      content: "";
      width: 36px;
      height: 36px;
      background: #c4c4c4 url(${Icon}) no-repeat center / 22px 22px;
      border-radius: 50%;
    }
  }
  input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    // 기본값
    padding: 0;
  }
`;

// import styled from "styled-components";
// import { Main } from "../../../components/MainLayOut";
// import Icon from "../../../asset/icon/icon-upload.png";
// export const StyledMain = styled(Main)`
//   // 포지션
//   justify-content: center;
//   flex-direction: row;
//   align-items: stretch;
//   // 크기
//   min-width: 390px;
//   width: 100%;
//   height: 100%;
//   background-color: #fff;
//   margin-top: 48px;
// `;
// export const MainFormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 390px;
//   width: 100%;
//   padding: 30px 34px 0;

//   form {
//     width: 100%;
//   }
// `;
// export const ProductImgWrapper = styled.div`
//   margin-bottom: 30px;

//   h3 {
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 14px;
//     color: #767676;
//     margin-bottom: 18px;
//   }
//   label {
//     position: relative;
//     display: block;
//     width: 100%;
//     height: 204px;
//     background-color: #f2f2f2;
//     border: 0.5 solid #dbdbdb;
//     border-radius: 10px;
//     cursor: pointer;
//     overflow: hidden;
//     &::after {
//       position: absolute;
//       right: 12px;
//       bottom: 12px;
//       content: "";
//       width: 36px;
//       height: 36px;
//       background: #c4c4c4 url(${Icon}) no-repeat center / 22px 22px;
//       border-radius: 50%;
//     }
//   }
//   input {
//     position: absolute;
//     left: -10000px;
//     top: auto;
//     width: 1px;
//     height: 1px;
//     overflow: hidden;
//     // 기본값
//     padding: 0;
//   }
// `;
