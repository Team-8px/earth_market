import styled from "styled-components";
import uploadIcon from "../../asset/upload-file.svg";
import IconRemove from "../../asset/icon/icon-remove.svg";
import basicImg from "../../asset/basic-profile-img.svg";

export const Form = styled.form`
  box-sizing: border-box;
`;

export const MainFieldSet = styled.fieldset`
  margin: 20px 16px;
  display: flex;
`;

export const ProfileImage = styled.img.attrs(props => ({
  src: props.src || basicImg,
  alt: "프로필 이미지",
}))`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  border: 0.5px solid ${props => props.theme.palette["border"]};
`;

export const PostForm = styled.article`
  width: 100%;
`;

export const PostFormContainer = styled.div`
  width: 100%;
  padding-top: 12px;
  overflow-x: scroll;
  overflow: hidden;

  input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    padding: 0;
  }
`;

export const TextBox = styled.label`
  width: 100%;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  textarea {
    width: 100%;
  }
`;

export const UploadImgIcon = styled.label`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  background-image: url(${uploadIcon});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  z-index: 100;
`;

export const PostPhotoList = styled.section``;

export const PhotoList = styled.ul`
  /* @media  */
  display: flex;
  width: 100%;
  gap: 8px;
  max-width: 390px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Item = styled.li`
  position: relative;
  border-radius: 10px;
  /* 줄어들어도 박스크기에 영향이 가지 않게. min설정 */
  min-width: 304px;
  height: 228px;
  overflow: hidden;
  border: 0.5px solid ${props => props.theme.palette["border"]};
  margin-right: 5px;
`;

export const UploadBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;
  width: 90px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background: ${props => props.theme.palette["main"]};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.4s ease;
  z-index: 150;
  :disabled {
    background: ${props => {
      /* console.log(props); */
      return props.theme.palette["lightMain"];
    }};
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  height: 22px;
  width: 22px;
  background: url(${IconRemove}) no-repeat center contain;
`;
