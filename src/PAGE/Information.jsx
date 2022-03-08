import React from "react";
import axios from "axios";

const ChatList = () => {
  const getAPI = async () => {
    const response = await axios.get(
      "http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    );
    console.log(response.data);
  };
  return (
    <>
      <button onClick={getAPI}>버튼</button>
    </>
  );
};

export default ChatList;
