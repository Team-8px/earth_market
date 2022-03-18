import axios from "axios"; //해당 페이지의 html을 가져온다
// 파싱은 html을 자바스크립트로 변환한다.
export const crawlingNews = async () => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
    },
  };
  const response = await axios.get("/news/NEWS/FLD/CNT/list");

  //console.log(response);
  return response;
};
