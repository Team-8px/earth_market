import styled from "styled-components";
import { PostMainLayout } from "../../../components/MainLayOut";
// import Upload from "../../../asset/upload-file.png";

export const MainLayOut = styled(PostMainLayout)`
  display: flex;
  padding: 20px 0 20px 16px; // 오른쪽은 0px로 둔 이유는 스크롤 바 때문입니다.
`;

// export const UploadContainer = styled.main`

//     h2 {
//         position: absolute;
//         left: -10000px;
//         top: auto;
//         width: 1px;
//         height: 1px;
//         overflow: hidden;
//     }

//     img {
//         width: 42px;
//         height: 42px;
//         border-radius: 50%;
//         margin-right: 12px;
//         border: 0.5px solid #dbdbdb;
//     }
// `;

// export const UploadWrapper = styled.article`
//     position: relative;
//     min-width: 300px;
//     width: 100%;
//     padding-right: 16px;
//     overflow-y: scroll;
// `;

// export const UploadPostWrapper = styled.div`
//     width: 100%;
//     padding-top: 12px;

//     textarea {
//         width: 100%;
//         height: 18px;
//         margin-bottom: 16px;
//         font-size: 14px;
//         line-height: 18px;
//     }

//     label {
//         position: fixed;
//         bottom: 16px;
//         right: 16px;
//         width: 50px;
//         height: 50px;
//         background-image: url(${Upload});
//         background-position: center;
//         background-size: cover;
//         cursor: pointer;
//         z-index: 100;
//     }

//     input {
//         position: absolute;
//         left: -10000px;
//         top: auto;
//         width: 1px;
//         height: 1px;
//         overflow: hidden;
//     }
// }
// `;
