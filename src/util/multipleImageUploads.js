import axios from "axios";
import { API_URL } from "../constants/defaultUrl";

export const multipleImageUploadsHandler = async files => {
  let filenames = [];
  let joinFilename = "";

  // 여러 이미지 등록
  // for await of : 반복문 내에서 모든 비동기 구문을 기다려주는 구문
  for await (let file of files) {
    const formData = new FormData();

    formData.append("image", file.fileData);

    const {
      data: { filename },
    } = await axios.post(`${API_URL}/image/uploadfile`, formData);
    console.log(filename);
    filenames.push(`${API_URL}/${filename}`);
  }

  // filename concat
  // 다중이미지 배열 => 문자열 (저장할때, ","로 구별하여 문자열 저장)
  for (let i = 0; i < filenames.length; i++) {
    if (i === 0) {
      joinFilename = filenames[i];
    }
    if (i > 0) {
      joinFilename = joinFilename + "," + filenames[i];
    }
  }

  //DB에 넣을때 => “1640066364747.png,1640066364748.png” 이미지를 불러올때는 따옴표를 기준으로 split하여 사용
  return joinFilename;
};
