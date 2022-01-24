import axios from "axios";
import { API_URL } from "../constants/defaultUrl";

export const imageUploadsHandler = async files => {
  //하나의 이미지를 처리하는 경우
  const formData = new FormData();

  formData.append("image", files);

  const {
    data: { filename },
  } = await axios.post(`${API_URL}/image/uploadfile`, formData);

  const fullFilename = `${API_URL}/${filename}`;

  console.log(fullFilename, "한개의 이미지 이름");

  return fullFilename;
};
