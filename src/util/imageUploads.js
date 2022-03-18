import axios from "axios";
import { API_URL } from "../constants/defaultUrl";

export const imageUploadsHandler = async files => {
  const formData = new FormData();

  formData.append("image", files);

  const {
    data: { filename },
  } = await axios.post(`${API_URL}/image/uploadfile`, formData);

  return filename ? `${API_URL}/${filename}` : undefined;
};
