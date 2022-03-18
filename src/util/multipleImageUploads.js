import axios from "axios";
import { API_URL } from "../constants/defaultUrl";

export const multipleImageUploadsHandler = async files => {
  let filenames = [];
  let joinFilename = "";

  for await (let file of files) {
    const formData = new FormData();

    formData.append("image", file.fileData);

    const {
      data: { filename },
    } = await axios.post(`${API_URL}/image/uploadfile`, formData);

    filenames.push(`${API_URL}/${filename}`);
  }

  for (let i = 0; i < filenames.length; i++) {
    if (i === 0) {
      joinFilename = filenames[i];
    }
    if (i > 0) {
      joinFilename = joinFilename + "," + filenames[i];
    }
  }

  return joinFilename;
};
