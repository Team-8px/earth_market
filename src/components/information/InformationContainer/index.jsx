import React, { useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { useEffect } from "react";

const InformationContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getAPI = async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/http://api.nongsaro.go.kr/service/monthFarmTech/monthFarmTechLst?apiKey=20220307MWUDEDKBKRX9E0GEEJ1IYA",
        );
        const dataArr = new XMLParser()
          .parseFromString(response.data)
          .children[1].children[0].children.filter(
            item => item.name === "item",
          );
        setData(dataArr);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>대기중 입니다</div>;
  }
  if (!data) {
    return <div>데이터 패칭에 실패했습니다</div>;
  }

  return (
    <>
      <ul>
        {data &&
          data.map(item => {
            return (
              <li key={Math.random() * 100}>
                {item.children.map(items => {
                  return (
                    <div key={Math.random() * 100}>
                      {items.value.slice(0, -1)}
                    </div>
                  );
                })}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default InformationContainer;
