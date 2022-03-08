import React, { useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

const ChatList = () => {
  const [data, setData] = useState([]);
  const getAPI = async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    );
    const dataSet = response.data;
    const dataArr = new XMLParser().parseFromString(dataSet).children[1]
      .children[0].children;
    setData(dataArr);
  };
  console.log(data);

  return (
    <>
      <button onClick={getAPI}>click</button>
      <ul>
        {data &&
          data.map((item, index) => {
            return (
              <li key={Math.random() * 100}>
                {item.children.map(items => {
                  return <div>test</div>;
                })}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ChatList;
